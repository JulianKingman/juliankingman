import type { CSSProperties } from 'react';

/**
 * Animated sacred-geometry line art for page backgrounds.
 *
 * Every stroke has pathLength=1 and the `sg-stroke` class, so the figure
 * draws itself in piece by piece, rests, fades, and begins again, while the
 * whole thing slowly turns and breathes. Colour comes from `currentColor`.
 */

interface Props {
  className?: string;
  /** Seconds for one full draw / rest / fade cycle. */
  cycle?: number;
  /** Seconds for one full rotation; negative turns counter-clockwise. */
  spin?: number;
}

const wrap = (
  { className = '', cycle = 26, spin = 240 }: Props,
  viewBox: string,
  children: React.ReactNode,
) => (
  <svg
    aria-hidden="true"
    viewBox={viewBox}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    className={`sg ${className}`}
    style={
      {
        '--sg-cycle': `${cycle}s`,
        '--sg-spin': `${Math.abs(spin)}s`,
        '--sg-dir': spin < 0 ? 'reverse' : 'normal',
      } as CSSProperties
    }
  >
    <g className="sg-spin">
      <g className="sg-breathe">{children}</g>
    </g>
  </svg>
);

const delay = (i: number, step: number): CSSProperties => ({ animationDelay: `${(i * step).toFixed(2)}s` });

/** The full nineteen-circle Flower of Life inside its double ring. */
export function FlowerOfLife(props: Props) {
  const r = 30;
  const c = 120;
  const centers: Array<[number, number]> = [[c, c]];
  for (let i = 0; i < 6; i++) {
    const a = (i * Math.PI) / 3 - Math.PI / 2;
    centers.push([c + Math.cos(a) * r, c + Math.sin(a) * r]);
  }
  for (let i = 0; i < 6; i++) {
    const a = (i * Math.PI) / 3 - Math.PI / 2;
    centers.push([c + Math.cos(a) * r * 2, c + Math.sin(a) * r * 2]);
    const b = a + Math.PI / 6;
    centers.push([c + Math.cos(b) * r * Math.sqrt(3), c + Math.sin(b) * r * Math.sqrt(3)]);
  }
  return wrap(
    props,
    '0 0 240 240',
    <>
      {centers.map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx.toFixed(2)}
          cy={cy.toFixed(2)}
          r={r}
          pathLength={1}
          strokeWidth={0.6}
          className="sg-stroke"
          style={delay(i, 0.32)}
        />
      ))}
      <circle cx={c} cy={c} r={r * 3} pathLength={1} strokeWidth={0.8} className="sg-stroke" style={delay(19, 0.32)} />
      <circle cx={c} cy={c} r={r * 3 + 5} pathLength={1} strokeWidth={0.5} className="sg-stroke" style={delay(20, 0.32)} />
    </>,
  );
}

/** Metatron's Cube: thirteen circles with every centre joined to every other. */
export function MetatronsCube(props: Props) {
  const c = 120;
  const d = 44;
  const pts: Array<[number, number]> = [[c, c]];
  for (const k of [1, 2]) {
    for (let i = 0; i < 6; i++) {
      const a = (i * Math.PI) / 3 - Math.PI / 2;
      pts.push([c + Math.cos(a) * d * k, c + Math.sin(a) * d * k]);
    }
  }
  const lines: Array<[number, number, number, number]> = [];
  for (let i = 0; i < pts.length; i++)
    for (let j = i + 1; j < pts.length; j++) lines.push([pts[i][0], pts[i][1], pts[j][0], pts[j][1]]);
  return wrap(
    props,
    '0 0 240 240',
    <>
      {pts.map(([cx, cy], i) => (
        <circle
          key={`c${i}`}
          cx={cx.toFixed(2)}
          cy={cy.toFixed(2)}
          r={d / 2}
          pathLength={1}
          strokeWidth={0.7}
          className="sg-stroke"
          style={delay(i, 0.25)}
        />
      ))}
      {lines.map(([x1, y1, x2, y2], i) => (
        <line
          key={`l${i}`}
          x1={x1.toFixed(2)}
          y1={y1.toFixed(2)}
          x2={x2.toFixed(2)}
          y2={y2.toFixed(2)}
          pathLength={1}
          strokeWidth={0.35}
          className="sg-stroke"
          style={delay(i, 0.06)}
        />
      ))}
    </>,
  );
}

/** A torus seen from above: a rosette of circles all passing through the centre. */
export function Torus({ count = 18, ...props }: Props & { count?: number }) {
  const c = 120;
  const r = 54;
  return wrap(
    props,
    '0 0 240 240',
    <>
      {Array.from({ length: count }, (_, i) => {
        const a = (i * Math.PI * 2) / count;
        return (
          <circle
            key={i}
            cx={(c + Math.cos(a) * r).toFixed(2)}
            cy={(c + Math.sin(a) * r).toFixed(2)}
            r={r}
            pathLength={1}
            strokeWidth={0.5}
            className="sg-stroke"
            style={delay(i, 0.28)}
          />
        );
      })}
      <circle cx={c} cy={c} r={r * 2} pathLength={1} strokeWidth={0.7} className="sg-stroke" style={delay(count, 0.28)} />
    </>,
  );
}
