import * as React from 'react';

export interface ServiceCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Division hue for the 3 px top border + accent. */
  division?: 'enlyst' | 'enlysum' | 'enlybiz' | 'enlysoft';
  /** ALL-CAPS eyebrow at the top of the card (e.g. `'enlyst · HR & Talent'`). */
  eyebrow?: string;
  /** Card heading (serif). */
  title?: string;
  /** Short body paragraph. */
  body?: string;
  /** Bullet list, rendered with `→` arrows. */
  items?: string[];
  /** CTA label; renders as a coloured text link (`→` is appended). */
  ctaLabel?: string;
  /** Optional href for the CTA. Default `'#'`. */
  ctaHref?: string;
  onCtaClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export function ServiceCard(props: ServiceCardProps): JSX.Element;
