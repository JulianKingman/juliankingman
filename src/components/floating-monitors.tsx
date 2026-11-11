'use client';

import { useEffect, useRef } from 'react';

/**
 * Pixel-art amber CRT monitors that hover beside the meditating mage.
 *
 * Each monitor is a tiny canvas (one canvas pixel = one art pixel) scaled up
 * with nearest-neighbour filtering so it matches the sprite. Screens idle on
 * small "programs" and now and then glitch over to a sacred symbol that draws
 * itself in. Occasionally every screen aligns on the same symbol.
 */

// Monitor sprite size, in art pixels
const W = 44;
const H = 34;
// Screen rect inside the sprite
const SX = 4;
const SY = 4;
const SW = 36;
const SH = 24;
const CX = (SW - 1) / 2;
const CY = (SH - 1) / 2;

const TICK_MS = 1000 / 12; // chunky, low-framerate phosphor

// Casing colours, sampled from the mage's robe
const CASE = {
  outline: '#2b1408',
  body: '#85431a',
  light: '#b0622a',
  shade: '#5c2c10',
  bezel: '#1a0c04',
};

// Phosphor intensity ramps (even rows / scanline rows)
const PHOSPHOR = ['#170b03', '#4a2a04', '#a86400', '#ffb000', '#ffe2a0'];
const PHOSPHOR_SCAN = ['#120802', '#3b2103', '#8a5200', '#d99500', '#ffd27a'];

type Pt = [number, number];

/* ---------- tiny rasteriser ---------- */

const line = (x0: number, y0: number, x1: number, y1: number): Pt[] => {
  const steps = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0)) | 0 || 1;
  const pts: Pt[] = [];
  for (let i = 0; i <= steps; i++) {
    pts.push([Math.round(x0 + ((x1 - x0) * i) / steps), Math.round(y0 + ((y1 - y0) * i) / steps)]);
  }
  return pts;
};

const arc = (cx: number, cy: number, r: number, a0 = 0, a1 = Math.PI * 2): Pt[] => {
  const steps = Math.max(8, Math.ceil(Math.abs(a1 - a0) * r * 1.6));
  const pts: Pt[] = [];
  for (let i = 0; i <= steps; i++) {
    const a = a0 + ((a1 - a0) * i) / steps;
    pts.push([Math.round(cx + Math.cos(a) * r), Math.round(cy + Math.sin(a) * r)]);
  }
  return pts;
};

const polygon = (cx: number, cy: number, r: number, sides: number, rot: number): Pt[] => {
  const pts: Pt[] = [];
  for (let i = 0; i < sides; i++) {
    const a0 = rot + (i * Math.PI * 2) / sides;
    const a1 = rot + ((i + 1) * Math.PI * 2) / sides;
    pts.push(
      ...line(cx + Math.cos(a0) * r, cy + Math.sin(a0) * r, cx + Math.cos(a1) * r, cy + Math.sin(a1) * r),
    );
  }
  return pts;
};

/** Keep draw order, drop repeats and anything off-screen. */
const tidy = (pts: Pt[]): Pt[] => {
  const seen = new Set<number>();
  const out: Pt[] = [];
  for (const [x, y] of pts) {
    if (x < 0 || y < 0 || x >= SW || y >= SH) continue;
    const k = y * SW + x;
    if (seen.has(k)) continue;
    seen.add(k);
    out.push([x, y]);
  }
  return out;
};

/* ---------- sacred symbols (ordered point lists, so they can draw in) ---------- */

const UP = -Math.PI / 2;
const DOWN = Math.PI / 2;

const SYMBOLS: Pt[][] = [
  // Seed of Life
  (() => {
    const r = 5.5;
    const pts = arc(CX, CY, r);
    for (let i = 0; i < 6; i++) {
      const a = UP + (i * Math.PI) / 3;
      pts.push(...arc(CX + Math.cos(a) * r, CY + Math.sin(a) * r, r, a + Math.PI, a + Math.PI * 3));
    }
    pts.push(...arc(CX, CY, 11, UP, UP + Math.PI * 2));
    return pts;
  })(),
  // Hexagram in a circle
  [...polygon(CX, CY, 11, 3, UP), ...polygon(CX, CY, 11, 3, DOWN), ...arc(CX, CY, 11, UP, UP + Math.PI * 2)],
  // Metatron's cube, reduced to its hexagon + inner star
  (() => {
    const pts = polygon(CX, CY, 11, 6, UP);
    for (let i = 0; i < 6; i++) {
      const a = UP + (i * Math.PI) / 3;
      pts.push(...line(CX, CY, CX + Math.cos(a) * 11, CY + Math.sin(a) * 11));
    }
    pts.push(...polygon(CX, CY, 5.5, 6, UP));
    return pts;
  })(),
  // Yantra: interlocking triangles around a bindu
  [
    ...polygon(CX, CY, 11, 3, DOWN),
    ...polygon(CX, CY, 11, 3, UP),
    ...polygon(CX, CY + 1, 6, 3, DOWN),
    ...polygon(CX, CY - 1, 6, 3, UP),
    [Math.floor(CX), Math.floor(CY)],
    [Math.ceil(CX), Math.floor(CY)],
    [Math.floor(CX), Math.ceil(CY)],
    [Math.ceil(CX), Math.ceil(CY)],
  ] as Pt[],
  // The eye
  (() => {
    const pts: Pt[] = [];
    for (let x = -15; x <= 15; x++) pts.push([Math.round(CX + x), Math.round(CY - 7 * Math.cos((Math.PI * x) / 30))]);
    for (let x = 15; x >= -15; x--) pts.push([Math.round(CX + x), Math.round(CY + 7 * Math.cos((Math.PI * x) / 30))]);
    pts.push(...arc(CX, CY, 4));
    pts.push(...arc(CX, CY, 1));
    for (const dx of [-8, 0, 8]) pts.push(...line(CX + dx, CY - 9 - (dx === 0 ? 1 : 0), CX + dx * 1.2, CY - 11));
    return pts;
  })(),
  // Spiral
  (() => {
    const pts: Pt[] = [];
    for (let a = 0; a < Math.PI * 7; a += 0.05) {
      const r = (a / (Math.PI * 7)) * 11.4;
      pts.push([Math.round(CX + Math.cos(a) * r), Math.round(CY + Math.sin(a) * r)]);
    }
    return pts;
  })(),
].map(tidy);

/* ---------- idle programs ---------- */

type Program = (buf: Uint8Array, t: number, mem: Record<string, unknown>) => void;

const put = (buf: Uint8Array, x: number, y: number, v: number) => {
  if (x < 0 || y < 0 || x >= SW || y >= SH) return;
  const i = y * SW + x;
  if (buf[i] < v) buf[i] = v;
};

/** Fake source code typing itself out, with "syntax highlighting". */
const codeProgram: Program = (buf, t, mem) => {
  type Line = { indent: number; tokens: Array<{ w: number; v: number }>; len: number };
  const ROWS = 7;
  const newLine = (): Line => {
    const indent = 1 + 2 * Math.floor(Math.random() * 4);
    const tokens: Line['tokens'] = [];
    let len = 0;
    const n = 1 + Math.floor(Math.random() * 4);
    for (let i = 0; i < n; i++) {
      const w = 2 + Math.floor(Math.random() * 6);
      if (indent + len + w > SW - 3) break;
      tokens.push({ w, v: Math.random() < 0.3 ? 4 : Math.random() < 0.5 ? 2 : 3 });
      len += w + 1;
    }
    return { indent, tokens, len };
  };
  const lines = (mem.lines ??= [newLine()]) as Line[];
  let typed = (mem.typed as number) ?? 0;

  const cur = lines[lines.length - 1];
  typed += 1 + (Math.random() < 0.4 ? 1 : 0);
  if (typed > cur.len + 4) {
    lines.push(newLine());
    if (lines.length > ROWS) lines.shift();
    typed = 0;
  }
  mem.typed = typed;

  lines.forEach((ln, row) => {
    const y = 2 + row * 3;
    const limit = row === lines.length - 1 ? typed : Infinity;
    let x = 0;
    for (const tok of ln.tokens) {
      for (let i = 0; i < tok.w; i++, x++) {
        if (x >= limit) break;
        put(buf, ln.indent + x, y, tok.v);
      }
      x++;
    }
    if (row === lines.length - 1 && t % 6 < 4) {
      const cx = ln.indent + Math.min(typed, ln.len);
      put(buf, cx, y, 4);
      put(buf, cx, y - 1, 4);
    }
  });
};

/** Oscilloscope trace that swells and settles like a slow breath. */
const waveProgram: Program = (buf, t) => {
  for (let x = 1; x < SW; x += 3) put(buf, x, Math.round(CY), 1);
  const amp = 4.5 + 3.5 * Math.sin(t * 0.045);
  let prev = -1;
  for (let x = 0; x < SW; x++) {
    const y = Math.round(CY + Math.sin(x * 0.34 + t * 0.22) * amp + Math.sin(x * 0.11 - t * 0.07) * 1.5);
    if (prev >= 0) for (let yy = Math.min(prev, y); yy <= Math.max(prev, y); yy++) put(buf, x, yy, 3);
    put(buf, x, y, 3);
    prev = y;
  }
  const head = (t * 2) % SW;
  for (let y = 0; y < SH; y++) if (buf[y * SW + head] >= 3) buf[y * SW + head] = 4;
};

/** Falling phosphor rain. */
const rainProgram: Program = (buf, t, mem) => {
  type Drop = { x: number; y: number; speed: number; len: number };
  const drops = (mem.drops ??= Array.from({ length: 9 }, () => ({
    x: Math.floor(Math.random() * (SW / 2)) * 2 + 1,
    y: Math.random() * SH,
    speed: 0.35 + Math.random() * 0.7,
    len: 3 + Math.floor(Math.random() * 6),
  }))) as Drop[];
  for (const d of drops) {
    d.y += d.speed;
    if (d.y - d.len > SH) {
      d.y = -Math.random() * 6;
      d.x = Math.floor(Math.random() * (SW / 2)) * 2 + 1;
    }
    const hy = Math.floor(d.y);
    put(buf, d.x, hy, 4);
    for (let i = 1; i < d.len; i++) put(buf, d.x, hy - i, i < 2 ? 3 : i < 4 ? 2 : 1);
  }
  void t;
};

/** A breathing ring: in for four, out for four. */
const breathProgram: Program = (buf, t) => {
  const phase = (Math.sin(t * 0.065 - Math.PI / 2) + 1) / 2;
  const r = 2.5 + phase * 8;
  for (const [x, y] of arc(CX, CY, r)) put(buf, x, y, 3);
  if (r > 6) for (const [x, y] of arc(CX, CY, r - 4)) put(buf, x, y, 1);
  put(buf, Math.floor(CX), Math.floor(CY), 4);
  put(buf, Math.ceil(CX), Math.floor(CY), 4);
  put(buf, Math.floor(CX), Math.ceil(CY), 4);
  put(buf, Math.ceil(CX), Math.ceil(CY), 4);
};

const PROGRAMS: Program[] = [codeProgram, waveProgram, rainProgram, breathProgram];

/* ---------- monitor state machine ---------- */

type Mode = 'boot' | 'idle' | 'glitch' | 'symbol';

interface Monitor {
  ctx: CanvasRenderingContext2D;
  buf: Uint8Array;
  mode: Mode;
  modeT: number; // ticks spent in the current mode
  program: number;
  mem: Record<string, unknown>;
  symbol: number;
  after: Mode; // where a glitch leads
  nextSymbolAt: number; // global tick
}

const drawCase = (ctx: CanvasRenderingContext2D) => {
  ctx.clearRect(0, 0, W, H);
  // outline with nipped corners
  ctx.fillStyle = CASE.outline;
  ctx.fillRect(1, 0, W - 2, H);
  ctx.fillRect(0, 1, W, H - 2);
  // body
  ctx.fillStyle = CASE.body;
  ctx.fillRect(1, 1, W - 2, H - 2);
  ctx.fillStyle = CASE.light;
  ctx.fillRect(2, 1, W - 4, 1);
  ctx.fillRect(1, 2, 1, H - 5);
  ctx.fillStyle = CASE.shade;
  ctx.fillRect(2, H - 2, W - 4, 1);
  ctx.fillRect(W - 2, 2, 1, H - 4);
  ctx.fillRect(2, SY + SH + 1, W - 4, 1);
  // inner bezel
  ctx.fillStyle = CASE.bezel;
  ctx.fillRect(SX - 1, SY - 1, SW + 2, SH + 2);
  // chin: knobs + vent
  ctx.fillStyle = CASE.outline;
  ctx.fillRect(5, SY + SH + 3, 2, 2);
  ctx.fillRect(9, SY + SH + 3, 2, 2);
  for (let x = 16; x < 30; x += 2) ctx.fillRect(x, SY + SH + 3, 1, 2);
  ctx.fillStyle = CASE.light;
  ctx.fillRect(5, SY + SH + 3, 1, 1);
  ctx.fillRect(9, SY + SH + 3, 1, 1);
};

const blit = (m: Monitor, tick: number) => {
  const { ctx, buf } = m;
  for (let y = 0; y < SH; y++) {
    const ramp = y % 2 ? PHOSPHOR_SCAN : PHOSPHOR;
    for (let x = 0; x < SW; x++) {
      // rounded tube corners
      const corner = (x === 0 || x === SW - 1) && (y === 0 || y === SH - 1);
      ctx.fillStyle = corner ? CASE.bezel : ramp[buf[y * SW + x]];
      ctx.fillRect(SX + x, SY + y, 1, 1);
    }
  }
  // power LED
  ctx.fillStyle = tick % 24 < 20 ? '#ffb000' : '#7a4a00';
  ctx.fillRect(W - 7, SY + SH + 3, 2, 2);
};

const drawSymbol = (buf: Uint8Array, pts: Pt[], progress: number, t: number) => {
  const n = Math.min(pts.length, Math.floor(progress * pts.length));
  for (let i = 0; i < n; i++) buf[pts[i][1] * SW + pts[i][0]] = 3;
  if (n < pts.length) {
    // the pen
    for (let i = Math.max(0, n - 3); i < n; i++) buf[pts[i][1] * SW + pts[i][0]] = 4;
  } else {
    // a tracer keeps circling the finished figure
    const head = (t * 3) % pts.length;
    for (let i = 0; i < 6; i++) {
      const p = pts[(head + i) % pts.length];
      buf[p[1] * SW + p[0]] = 4;
    }
  }
};

const SYMBOL_DRAW = 22; // ticks to draw in
const SYMBOL_HOLD = 46; // ticks to hold afterwards
const GLITCH = 5;
const BOOT = 10;

const stepMonitor = (m: Monitor, tick: number) => {
  const { buf } = m;
  buf.fill(0);
  m.modeT++;

  switch (m.mode) {
    case 'boot': {
      // the tube warms up: a line that widens, then opens
      const p = m.modeT / BOOT;
      const halfW = Math.min(SW / 2, p * 2 * (SW / 2));
      const halfH = p < 0.5 ? 0 : (p - 0.5) * 2 * (SH / 2);
      for (let y = Math.floor(CY - halfH); y <= Math.ceil(CY + halfH); y++)
        for (let x = Math.floor(CX - halfW); x <= Math.ceil(CX + halfW); x++) put(buf, x, y, p < 0.5 ? 4 : 2);
      if (m.modeT >= BOOT) {
        m.mode = 'idle';
        m.modeT = 0;
      }
      break;
    }
    case 'idle': {
      PROGRAMS[m.program](buf, tick, m.mem);
      if (tick >= m.nextSymbolAt) {
        m.mode = 'glitch';
        m.after = 'symbol';
        m.modeT = 0;
      }
      break;
    }
    case 'glitch': {
      for (let i = 0; i < buf.length; i++) buf[i] = Math.random() < 0.28 ? 1 + ((Math.random() * 3) | 0) : 0;
      const bar = (m.modeT * 5) % SH;
      for (let x = 0; x < SW; x++) {
        buf[bar * SW + x] = 4;
        buf[((bar + 1) % SH) * SW + x] = 3;
      }
      if (m.modeT >= GLITCH) {
        m.mode = m.after;
        m.modeT = 0;
        if (m.after === 'idle') {
          m.program = (m.program + 1 + Math.floor(Math.random() * (PROGRAMS.length - 1))) % PROGRAMS.length;
          m.mem = {};
        }
      }
      break;
    }
    case 'symbol': {
      drawSymbol(buf, SYMBOLS[m.symbol], m.modeT / SYMBOL_DRAW, m.modeT);
      if (m.modeT >= SYMBOL_DRAW + SYMBOL_HOLD) {
        m.mode = 'glitch';
        m.after = 'idle';
        m.modeT = 0;
        m.symbol = (m.symbol + 1 + Math.floor(Math.random() * (SYMBOLS.length - 1))) % SYMBOLS.length;
        m.nextSymbolAt = tick + 110 + Math.floor(Math.random() * 190); // ~9–25s
      }
      break;
    }
  }
  blit(m, tick);
};

const SLOTS = ['a', 'b', 'c', 'd'] as const;

export default function FloatingMonitors() {
  const refs = useRef<Array<HTMLCanvasElement | null>>([]);

  useEffect(() => {
    const monitors: Monitor[] = [];
    refs.current.forEach((canvas, i) => {
      const ctx = canvas?.getContext('2d');
      if (!ctx) return;
      drawCase(ctx);
      monitors.push({
        ctx,
        buf: new Uint8Array(SW * SH),
        mode: 'boot',
        modeT: -i * 4, // power on one after another
        program: i % PROGRAMS.length,
        mem: {},
        symbol: (i * 2) % SYMBOLS.length,
        after: 'idle',
        nextSymbolAt: 50 + i * 55 + Math.floor(Math.random() * 40),
      });
    });
    if (!monitors.length) return;

    // Reduced motion: each screen simply rests on a symbol.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      monitors.forEach((m) => {
        for (const [x, y] of SYMBOLS[m.symbol]) m.buf[y * SW + x] = 3;
        blit(m, 0);
      });
      return;
    }

    let raf = 0;
    let last = 0;
    let tick = 0;
    let nextAlignment = 420 + Math.floor(Math.random() * 240); // ~35–55s

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (now - last < TICK_MS) return;
      last = now;
      tick++;

      // Now and then, every screen converges on the same symbol.
      if (tick >= nextAlignment) {
        const symbol = Math.floor(Math.random() * SYMBOLS.length);
        monitors.forEach((m, i) => {
          if (m.mode !== 'idle') return;
          m.symbol = symbol;
          m.nextSymbolAt = tick + i * 4;
        });
        nextAlignment = tick + 540 + Math.floor(Math.random() * 360);
      }

      monitors.forEach((m) => stepMonitor(m, tick));
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none">
      {SLOTS.map((slot, i) => (
        <canvas
          key={slot}
          ref={(el) => {
            refs.current[i] = el;
          }}
          width={W}
          height={H}
          className={`crt-monitor crt-monitor-${slot}`}
        />
      ))}
    </div>
  );
}
