// StatusChip — rounded capsule with a 6 px coloured dot prefix.
// Used in tables, lists, and dashboard rows.

export function StatusChip({ status = 'draft', children, style, ...rest }) {
  const stops = {
    live:    { bg: 'var(--green-pale)',  fg: '#126B3F', dot: 'var(--finance-green)' },
    queued:  { bg: 'var(--amber-pale)',  fg: '#8C470A', dot: 'var(--biz-amber)' },
    blocked: { bg: '#FEE2E2',            fg: '#991B1B', dot: '#B91C1C' },
    draft:   { bg: '#EDECEA',            fg: 'var(--ink-2)', dot: '#888888' },
    info:    { bg: 'var(--blue-pale)',   fg: '#1E40AF', dot: 'var(--hr-blue)' },
  };
  const c = stops[status] || stops.draft;

  return React.createElement('span', {
    ...rest,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 500,
      padding: '4px 12px',
      borderRadius: 'var(--radius-pill)',
      background: c.bg,
      color: c.fg,
      ...style,
    },
  },
    React.createElement('span', {
      style: { width: 6, height: 6, borderRadius: '50%', background: c.dot, flexShrink: 0 },
    }),
    children
  );
}

Object.assign(window, { StatusChip });
