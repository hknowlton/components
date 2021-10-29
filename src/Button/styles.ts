import { HTMLProps } from 'react';
import styled from 'styled-components';
// import DownArrowLong from '@carvana/icons/DownArrowLong';

import theme from 'src/styles/theme';

const { carvana, carvanaV2 } = theme;
// this really should use the csstype library, but there's things like fontColor, which is not a valid css property
export type CssProps = {
  color: string;
  border: string;
  backgroundColor: string;
  fontWeight: number;
  fontColor: string;
  lineHeight: string | number;
  margin: string | number;
  fontSize: string | number;
  borderRadius: string | number;
  width: string | number;
  height: string | number;
  padding: string | number;
  textTransform:
    | 'capitalize'
    | 'uppercase'
    | 'lowercase'
    | 'full-width'
    | 'none';
  transition: string;
  disabled: string;
  label: string;
  hover: string;
  zIndex: string | number;
};

type StyleProps = {
  styles: CssProps;
} & HTMLProps<HTMLButtonElement>;

export const Button = styled.button<StyleProps>`
  cursor: pointer;
  display: inline-block;
  font-family: ${theme.StyledText.fontFamily};
  font-weight: ${props => props.styles.fontWeight || 600};
  text-decoration: none;
  text-align: center;
  box-sizing: border-box;
  margin: ${props => props.styles.margin || 'inherit'};
  color: ${props => props.styles.fontColor || 'inherit'};
  border-radius: ${props => props.styles.borderRadius || '3px'};
  width: ${props => props.styles.width || 'inherit'};
  height: ${props => props.styles.height || 'inherit'};
  border: ${props => props.styles.border || '1px solid transparent'};
  color: ${props => props.styles.color || carvana.white.primary};
  background-color: ${props =>
    props.styles.backgroundColor || carvana.blue.primary};
  padding: ${props => props.styles.padding || '0.7rem 1rem'};
  line-height: ${props => props.styles.lineHeight || '14px'};
  font-size: ${props => props.styles.fontSize || '0.7rem'};
  text-transform: ${props => props.styles.textTransform || 'uppercase'};
  transition: ${props =>
    props.styles.transition || 'background-color ease 0.3s'};
  z-index: ${props => props.styles.zIndex || 'auto'};
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px 0px ${theme.carvana.blue.dark};
  }
  &:hover {
    ${({ disabled, styles }) => {
      return disabled || styles.hover
        ? styles.hover
        : `background-color: ${theme.carvana.blue.hover};`;
    }}
    svg {
      color: white;
    }
  }
  &:disabled {
    ${props =>
      props.styles.disabled ||
      `{
      cursor: not-allowed;
      background-color: ${carvana.gray.light};
      color: ${carvana.gray.dark};
      border: none;
    }`}
    &:hover {
      cursor: not-allowed;
    }
  }
  &:after {
    content: '${props => props.label}';
  }
`;

export const classes = {
  default: {
    padding: '0.7rem 1rem'
  },
  'primary-v2': {
    fontSize: '14px',
    backgroundColor: carvanaV2.blue.primary,
    hover: `
    background-color: ${carvanaV2.blue.medium};
    `
  },
  'outline-primary': {
    backgroundColor: 'transparent',
    color: carvana.blue.primary,
    padding: '0.7rem 1rem',
    border: `1px solid ${carvana.blue.primary}`,
    hover: `
      background-color: ${carvana.blue.hover};
      color: ${carvana.white.primary};
      border: 1px solid transparent;
    `
  },
  'outline-primary-v2': {
    backgroundColor: 'transparent',
    color: theme.carvanaV2.blue.primary,
    padding: '0.7rem 1rem',
    border: `1px solid ${theme.carvanaV2.blue.primary}`,
    fontSize: '14px',
    hover: `
      background-color: ${theme.carvanaV2.blue.primary};
      color: ${carvana.white.primary};
      border: 1px solid transparent;
    `
  },
  'outline-yellow': {
    backgroundColor: 'transparent',
    color: carvana.yellow.primary,
    padding: '0.7rem 1rem',
    border: `1px solid ${carvana.yellow.primary}`,
    hover: `
      background-color: ${carvana.yellow.hover};
      color: ${carvana.white.primary};
      border: 1px solid transparent;
    `
  },
  'outline-red': {
    backgroundColor: 'transparent',
    color: carvana.red.primary,
    padding: '0.7rem 1rem',
    border: `1px solid ${carvana.red.primary}`,
    hover: `
      background-color: ${carvana.red.primary};
      color: ${carvana.white.primary};
      border: 1px solid transparent;
    `
  },
  'view-modal': {
    position: 'relative',
    width: 'auto',
    border: `1px solid ${carvana.gray.border}`,
    backgroundColor: carvana.white.primary,
    color: carvana.blue.primary,
    textTransform: 'uppercase',
    padding: '20px 50px',
    fontSize: '12px',
    hover: `
      color: ${carvana.white.primary};
      background-color: ${carvana.blue.hover};
    `
  },
  'filled-green': {
    padding: '0.7rem 1rem',
    backgroundColor: carvana.green.dark,
    hover: `
      background-color: ${carvana.green.primary};
    `
  },
  'filled-green-v2': {
    padding: '0.7rem 1rem',
    backgroundColor: carvanaV2.green.light,
    hover: `
      background-color: ${carvana.green.primary};
    `
  },
  'filled-yellow': {
    padding: '0.7rem 1rem',
    backgroundColor: carvana.yellow.primary,
    hover: `
      background-color: ${carvana.yellow.hover};
    `
  },
  'filled-mediumblue': {
    padding: '0.7rem 1rem',
    backgroundColor: carvana.blue.medium,
    hover: `
      background-color: ${carvana.blue.hover};
    `
  },
  'transparent-background': {
    border: 'none',
    backgroundColor: 'transparent',
    color: `${carvana.gray.medium}`,
    fontSize: '24px',
    transition: 'color ease 0.3s',
    hover: `
      color: ${carvana.blue.hover}
    `
  },
  'primary-transparent': {
    border: 'none',
    backgroundColor: 'transparent',
    color: `${carvana.blue.primary}`,
    fontSize: '14px',
    transition: 'color ease 0.3s',
    hover: `
      color: ${carvana.gray.dark};`
  },
  'primary-transparent-v2': {
    border: 'none',
    backgroundColor: 'transparent',
    color: `${carvanaV2.blue.primary}`,
    fontSize: '14px',
    transition: 'color ease 0.3s',
    hover: `
      color: ${carvanaV2.grey.dark};`
  },
  'transparent-background-light': {
    border: 'none',
    backgroundColor: 'transparent',
    color: `${carvana.white.primary}`,
    fontSize: '24px',
    transition: 'ease color 0.2s',
    hover: `
      color: ${carvana.blue.hover}
    `
  },
  'filled-red': {
    padding: '0.7rem 1rem',
    backgroundColor: carvana.red.dark,
    hover: `
      background-color: ${carvana.red.primary}
    `
  },
  'filled-red-v2': {
    padding: '0.7rem 1rem',
    backgroundColor: carvanaV2.red.light,
    hover: `
      background-color: ${carvana.red.primary};
    `
  }
};

// export const StyledArrow = styled(DownArrowLong)`
//   color: ${carvana.blue.primary};
//   transform: rotate(229deg);
//   left: 48px;
//   top: -7px;
//   width: 0;
//   transition: color ease 0.2s;
//   svg {
//     height: 15px;
//   }
// `;
