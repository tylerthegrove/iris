import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { slate, blue } from '../../../color';
import { withIris, IrisInputProps } from '../../../utils';
import { Wrapper } from '../Wrapper/Wrapper';

export const TextArea = withIris<HTMLInputElement, Props>(
  TextAreaComponent,
);

type Props = IrisInputProps<{
  disabled?: boolean;
  errorMsg?: ReactNode;
  format?: 'negative' | 'positive' | 'neutral';
  helperMsg?: ReactNode;
  id?: string;
  label?: string;
  preMessage?: ReactNode;
  showLabel?: boolean;
}>;

function TextAreaComponent({
  disabled,
  errorMsg,
  format = 'neutral',
  messages,
  helperMsg,
  id,
  label,
  preMessage,
  ...props
}) {
  return (
    <Wrapper disabled={disabled} label={label} messages={messages}>
      <TextAreaStyled
        id={id}
        aria-label={label}
        aria-invalid={format === 'negative'}
        disabled={disabled}
        hasIcon={format !== 'neutral'}
        format={format}
        {...props}
      />
    </Wrapper>
  );
}

const TextAreaStyled = styled.textarea<any>`
  display: block;
  width: 100%;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: 1rem;
  font-size: ${rem(14)};
  line-height: 1.25rem;
  height: auto;
  border-radius: 0.2rem;

  &:placeholder {
    color: ${slate(200)};
  }

  &:focus {
    outline: none;
    border: 1.5px solid ${blue(500)};
  }

  ${props =>
    props.hasIcon &&
    css`
      padding-left: 2.25rem;
    `};
`;
