import React, { ReactNode, forwardRef, Ref } from 'react';
import { Header, Paragraph } from '../../../typography';
import { IrisInputProps, IrisProps } from '../../../utils';
import styled, { css } from 'styled-components';

interface Props {
  floating?: boolean;
  floatLabel?: boolean;
  icon?: ReactNode;
  label?: ReactNode;
  status?: 'positive' | 'negative';
  value?: string;
  defaultValue?: string | string[] | number | boolean;
}

export const Wrapper = forwardRef(function(
  {
    children,
    defaultValue,
    floating,
    floatLabel,
    icon,
    label,
    messages = {},
    status,
    style,
    theme,
    value,
    ...props
  }: IrisInputProps<Props>,
  ref: Ref<HTMLDivElement>,
) {
  const active = floating && floatLabel;

  const preMessage = messages.pre && messages.pre;
  const postMessage = messages.post && messages.post;
  const error = status === 'negative' && messages.error;
  const help = status === 'positive' && messages.help;

  return (
    <div
      {...props}
      ref={ref}
      style={{ ...style, position: 'relative' }}
    >
      {preMessage}
      {label && (
        <Label floating={floating} active={active} size="6">
          {label}
        </Label>
      )}
      {children}
      <MessageArea
        error={error}
        help={help}
        post={postMessage}
        theme={theme}
      />
    </div>
  );
});

const Label = styled(Header)<any>`
  transition: 120ms ease-in-out;
  ${p =>
    p.floating &&
    !p.active &&
    css`
      pointer-events: none;
      font-size: 1rem;
      position: absolute;
      z-index: 1;
      top: 1rem;
      left: 0.5rem;
    `};

  ${p =>
    p.floating &&
    p.active &&
    css`
      position: absolute;
      z-index: 1;
      top: 0.125rem;
      left: 0.5rem;
    `};
`;

interface MessageAreaProps {
  error?: ReactNode;
  post?: ReactNode;
  help?: ReactNode;
  position?: 'bottom' | 'sublabel';
}

const MessageArea = forwardRef(function(
  {
    error,
    position = 'bottom',
    help,
    post,
    theme,
    ...props
  }: IrisProps<MessageAreaProps>,
  ref: Ref<HTMLParagraphElement>,
) {
  if (post) props.children = post;
  if (help) props.children = help;
  if (error) props.children = error;

  return (
    <div
      {...props}
      style={{
        display: 'inline-flex',
        marginBottom: position === 'sublabel' && '0.5rem',
      }}
    >
      {post && <Message ref={ref} {...props} />}
      {help && <Message ref={ref} {...props} />}
      {error && <Message ref={ref} {...props} />}
    </div>
  );
});

function Message({ children, status, ...props }: any) {
  return (
    <Paragraph
      {...props}
      size="3"
      element="span"
      role={status === 'negative' ? 'alert' : 'note'}
      style={{ overflow: 'hidden' }}
    >
      {children}
    </Paragraph>
  );
}
