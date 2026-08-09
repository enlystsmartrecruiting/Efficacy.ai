import * as React from 'react';

export interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Division hue for the 3 px left border. Overridden by `color`. */
  division?: 'enlyst' | 'enlysum' | 'enlybiz' | 'enlysoft';
  /** Custom border colour (hex or CSS variable). */
  color?: string;
  children?: React.ReactNode;
}

export function Pill(props: PillProps): JSX.Element;
