// Button — primary / dark / outline / ghost, three sizes, optional division accent.
// Always 4 px radius, Inter 500, restrained hover (opacity 0.88 / 0.82).

export function Button({
  variant = 'primary',     // 'primary' | 'dark' | 'outline' | 'ghost'
  size = 'md',             // 'sm' | 'md' | 'lg'
  division,                // optional: swap the accent on primary
  as = 'button',
  children,
  style,
  ...rest
}) {
  const divHues = {
    enlyst:   ['var(--hr-blue)',       'var(--blue-pale)'],
    enlysum:  ['var(--finance-green)', 'var(--green-pale)'],
    enlybiz:  ['var(--biz-amber)',     'var(--amber-pale)'],
    enlysoft: ['var(--tech-purple)',   'var(--purple-pale)'],
  };
  const accent = (division && divHues[division] && divHues[division][0]) || 'var(--accent)';

  const sizes = {
    sm: { padY:  9, padX: 18, font: 12 },
    md: { padY: 13, padX: 26, font: 13 },
    lg: { padY: 16, padX: 32, font: 14 },
  };
  const s = sizes[size] || sizes.md;

  const base = {
    fontFamily: 'var(--font-sans)',
    fontSize: s.font,
    fontWeight: 500,
    padding: `${s.padY}px ${s.padX}px`,
    borderRadius: 'var(--radius-md)',
    cursor: 'pointer',
    transition: 'opacity var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)',
    border: 'none',
    lineHeight: 1,
    textDecoration: 'none',
    display: 'inline-block',
  };

  const variants = {
    primary: { ...base, background: accent, color: 'var(--white)' },
    dark:    { ...base, background: 'var(--ink)', color: 'var(--off-white)' },
    outline: { ...base, background: 'transparent', color: 'var(--ink)',
               border: '1.5px solid var(--rule)', padding: `${s.padY - 1}px ${s.padX}px` },
    ghost:   { ...base, background: 'transparent', color: 'var(--ink-2)' },
  };

  return React.createElement(as, {
    ...rest,
    style: { ...variants[variant] || variants.primary, ...style },
    onMouseEnter: (e) => { if (variant === 'primary') e.currentTarget.style.opacity = '0.88';
                           else if (variant === 'dark') e.currentTarget.style.opacity = '0.82';
                           else if (variant === 'outline') e.currentTarget.style.borderColor = 'var(--ink)';
                           else if (variant === 'ghost') e.currentTarget.style.background = 'rgba(17,17,17,0.04)';
                           rest.onMouseEnter && rest.onMouseEnter(e); },
    onMouseLeave: (e) => { e.currentTarget.style.opacity = '';
                           if (variant === 'outline') e.currentTarget.style.borderColor = 'var(--rule)';
                           if (variant === 'ghost') e.currentTarget.style.background = 'transparent';
                           rest.onMouseLeave && rest.onMouseLeave(e); },
  }, children);
}

Object.assign(window, { Button });
