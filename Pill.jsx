// Pill — small category chip with a 3 px left-border accent.
// Used for taxonomy labels: People, Operations, Growth, Technology.

export function Pill({ division, color, children, style, ...rest }) {
  const divHues = {
    enlyst:   'var(--hr-blue)',
    enlysum:  'var(--finance-green)',
    enlybiz:  'var(--biz-amber)',
    enlysoft: 'var(--tech-purple)',
  };
  const accent = color || (division && divHues[division]) || 'var(--hr-blue)';
  return React.createElement('span', {
    ...rest,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.05em',
      padding: '6px 14px',
      borderRadius: 'var(--radius-sm)',
      borderLeft: `3px solid ${accent}`,
      background: '#EDECEA',
      color: 'var(--ink)',
      ...style,
    },
  }, children);
}

Object.assign(window, { Pill });
