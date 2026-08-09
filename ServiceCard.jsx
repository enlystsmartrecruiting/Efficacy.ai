// ServiceCard — the strongest brand motif: a card with a 3 px coloured top border
// in a division hue. Hovers lift 3 px with a soft shadow.

export function ServiceCard({
  division = 'enlyst',  // 'enlyst' | 'enlysum' | 'enlybiz' | 'enlysoft'
  eyebrow,              // e.g. 'enlyst · HR & Talent'
  title,                // serif H3
  body,                 // short paragraph
  items = [],           // array of strings, rendered with → arrows
  ctaLabel,             // e.g. 'Read the playbook'
  ctaHref = '#',
  onCtaClick,
  style,
  ...rest
}) {
  const divHues = {
    enlyst:   'var(--hr-blue)',
    enlysum:  'var(--finance-green)',
    enlybiz:  'var(--biz-amber)',
    enlysoft: 'var(--tech-purple)',
  };
  const accent = divHues[division] || divHues.enlyst;

  return React.createElement('article', {
    ...rest,
    style: {
      background: 'var(--white)',
      border: '1px solid var(--rule)',
      borderTop: `3px solid ${accent}`,
      borderRadius: 'var(--radius-2xl)',
      padding: '32px 28px',
      transition: 'box-shadow var(--dur-slow) var(--ease-out), transform var(--dur-slow) var(--ease-out)',
      display: 'flex', flexDirection: 'column',
      ...style,
    },
    onMouseEnter: (e) => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = '0 8px 32px rgba(17,17,17,0.07)';
      rest.onMouseEnter && rest.onMouseEnter(e);
    },
    onMouseLeave: (e) => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = '';
      rest.onMouseLeave && rest.onMouseLeave(e);
    },
  },
    eyebrow && React.createElement('div', {
      style: {
        fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 600,
        letterSpacing: '0.1em', textTransform: 'uppercase',
        color: accent, marginBottom: 10,
      },
    }, eyebrow),
    title && React.createElement('h3', {
      style: {
        fontFamily: 'var(--font-serif)', fontWeight: 400,
        fontSize: 22, lineHeight: 1.2, letterSpacing: '-0.012em',
        color: 'var(--ink)', margin: 0, marginBottom: 10,
      },
    }, title),
    body && React.createElement('p', {
      style: {
        fontSize: 13, lineHeight: 1.65, color: 'var(--ink-3)',
        margin: 0, marginBottom: items.length ? 18 : 0,
      },
    }, body),
    items.length > 0 && React.createElement('ul', {
      style: { listStyle: 'none', padding: 0, margin: 0, marginBottom: ctaLabel ? 18 : 0 },
    },
      items.map((it, i) => React.createElement('li', {
        key: i,
        style: {
          fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.55,
          padding: '6px 0',
          borderBottom: i < items.length - 1 ? '1px solid var(--rule)' : 'none',
          display: 'flex', gap: 7, alignItems: 'flex-start',
        },
      },
        React.createElement('span', { style: { color: 'var(--ink-3)', flexShrink: 0 } }, '→'),
        it
      ))
    ),
    ctaLabel && React.createElement('a', {
      href: ctaHref,
      onClick: onCtaClick,
      style: {
        fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500,
        color: accent, textDecoration: 'none', marginTop: 'auto',
      },
    }, ctaLabel, ' →')
  );
}

Object.assign(window, { ServiceCard });
