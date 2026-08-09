// EyebrowRule — the brand's signature section opener:
// a 28×1.5 px coloured bar, 10 px gap, then an ALL-CAPS mono micro-label.

export function EyebrowRule({
  label,
  color,           // hex or var(--...); defaults to obsidian
  division,        // optional: 'enlyst' | 'enlysum' | 'enlybiz' | 'enlysoft'
  size = 'md',     // 'sm' | 'md' | 'lg'
  inverse = false, // true → for dark surfaces (lightens the label)
  trailingRule = false, // true → adds a thin hairline filling to the right
  as = 'div',
  style,
  ...rest
}) {
  const divHues = {
    enlyst:   'var(--hr-blue)',
    enlysum:  'var(--finance-green)',
    enlybiz:  'var(--biz-amber)',
    enlysoft: 'var(--tech-purple)',
  };
  const barColor = color || (division && divHues[division]) || (inverse ? 'rgba(255,255,255,0.6)' : 'var(--ink)');
  const labelColor = inverse ? 'rgba(255,255,255,0.6)' : 'var(--ink-3)';
  const sizes = {
    sm: { font: 10, gap: 8,  bar: 22 },
    md: { font: 11, gap: 10, bar: 28 },
    lg: { font: 13, gap: 12, bar: 36 },
  };
  const s = sizes[size] || sizes.md;

  return React.createElement(as, {
    ...rest,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: s.gap,
      fontFamily: 'var(--font-mono)',
      fontSize: s.font,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: labelColor,
      ...style,
    },
  },
    React.createElement('span', {
      style: { width: s.bar, height: 1.5, background: barColor, flexShrink: 0 },
    }),
    React.createElement('span', null, label),
    trailingRule && React.createElement('span', {
      style: { flex: 1, height: 1, background: 'var(--rule)', marginLeft: s.gap - 2 },
    })
  );
}

Object.assign(window, { EyebrowRule });
