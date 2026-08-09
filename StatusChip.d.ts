import * as React from 'react';

export interface StatusChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Operational status — drives colour and dot. */
  status?: 'live' | 'queued' | 'blocked' | 'draft' | 'info';
  children?: React.ReactNode;
}

export function StatusChip(props: StatusChipProps): JSX.Element;
