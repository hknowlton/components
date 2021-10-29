import React, { HTMLProps } from 'react';

import {
  Button as ButtonStyles,
  classes,
//   StyledArrow,
  CssProps
} from './styles';

type ButtonVariant =
  | 'default'
  | 'outline-primary'
  | 'outline-red'
  | 'outline-yellow'
  | 'filled-green'
  | 'filled-green-v2'
  | 'filled-mediumblue'
  | 'filled-red'
  | 'filled-red-v2'
  | 'filled-yellow'
  | 'transparent-background'
  | 'transparent-background-light'
  | 'primary-transparent'
  | 'view-modal'
  | 'outline-primary-v2'
  | 'primary-v2'
  | 'primary-transparent-v2';

type Props = {
  styles?: Partial<CssProps>;
  variant?: ButtonVariant;
  text: string;
  loadingText?: string;
  isLoading?: boolean;
  disabled?: boolean;
} & HTMLProps<HTMLButtonElement>;

function getVariantStyles(variant: ButtonVariant) {
  return classes[variant];
}

export const Button = ({
  variant = 'default',
  text,
  styles = {},
  loadingText,
  isLoading,
  ...htmlAttributes
}: Props) => {
  return (
    <>
      <ButtonStyles
        styles={{ ...getVariantStyles(variant), ...styles }}
        disabled={htmlAttributes.disabled || isLoading}
        {...(htmlAttributes as any)}
      >
        {isLoading && loadingText ? loadingText : text}
        {/* {variant === 'view-modal' && !htmlAttributes.disabled && (
          <StyledArrow />
        )} */}
      </ButtonStyles>
    </>
  );
};
