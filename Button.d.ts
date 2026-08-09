import * as React from 'react';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /** Visual variant. */
  variant?: 'primary' | 'dark' | 'outline' | 'ghost';
  /** Size scale. */
  size?: 'sm' | 'md' | 'lg';
  /** Swap the primary background to a division hue. */
  division?: 'enlyst' | 'enlysum' | 'enlybiz' | 'enlysoft';
  /** Override the rendered tag. Default `'button'`. */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
