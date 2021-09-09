import { IrisInputProps, Messages } from '../../utils';
import { ReactNode } from 'react';

export type Props = IrisInputProps<{
  floating?: boolean;
  indeterminate?: boolean;
  inlineButton?: ReactNode;
  /**
   * A Mesages object:
   *
   * error?: ReactNode;
   * help?: ReactNode;
   * pre?: ReactNode;
   * post?: ReactNode;
   */
  messages?: Messages;
  pill?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  status?: 'negative' | 'positive' | 'neutral';
  variant?: 'underline';
  autosuggest?: string[];
}>;
