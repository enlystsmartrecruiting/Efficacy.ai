import * as React from 'react';

export interface EyebrowRuleProps extends React.HTMLAttributes<HTMLElement> {
  /** The label text. ALL-CAPS rendering is applied automatically. */
  label: string;
  /** Hex or CSS variable for the rule bar colour. Overrides `division`. */
  color?: string;
  /** Pick a division hue for the rule. */
  division?: 'enlyst' | 'enlysum' | 'enlybiz' | 'enlysoft';
  /** Size of the rule + label. */
  size?: 'sm' | 'md' | 'lg';
  /** Render for dark surfaces (lightens the label). */
  inverse?: boolean;
  /** Append a hairline rule filling the remaining row width. */
  trailingRule?: boolean;
  /** Override the rendered tag. Default `'div'`. */
  as?: keyof JSX.IntrinsicElements;
}

export function EyebrowRule(props: EyebrowRuleProps): JSX.Element;
