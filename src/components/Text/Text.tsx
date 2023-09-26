import React from 'react';
import styled from '@emotion/native';
import {
  typography,
  space,
  color,
  layout,
  flexbox,
  border,
  fontSize,
  fontWeight,
  compose,
} from 'styled-system';
import { useTheme } from '@emotion/react';
import type { TextProps } from './types';
import type { Theme } from '../../theme';

export const props = compose(
  typography,
  space,
  color,
  layout,
  flexbox,
  border,
  fontSize,
  fontWeight
);

const StyledText = styled.Text(props);

const Text: React.FC<TextProps> = ({ children, variant, ...rest }) => {
  const theme = useTheme() as Theme;
  const style = theme.text[variant as keyof Theme['text']] ?? {};
  return (
    <StyledText {...style} {...rest}>
      {children}
    </StyledText>
  );
};

export default Text