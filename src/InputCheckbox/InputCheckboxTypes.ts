import { MouseEventHandler, ReactNode } from 'react';

export interface InputCheckboxProps {
  checked?: boolean;
  checkedStyle?: 'default' | 'indeterminate';
  disabled?: boolean;
  errorMsg?: ReactNode;
  format?: 'negative' | 'positive' | 'neutral';
  helperMsg?: ReactNode;
  hideLabel?: boolean;
  id: string;
  label: ReactNode;
  onClick?: MouseEventHandler;
  readOnly?: boolean;
  theme?: 'default' | 'dark';
}

export interface InputCheckboxOverlayStyledProps {
  checkedStyle?: 'default' | 'indeterminate';
  theme?: 'default' | 'dark';
}

export interface InputCheckboxHiddenLabelStyledProps {
  hideLabel?: boolean;
}
