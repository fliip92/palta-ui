import React, { FC } from 'react';
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
import type { ThemeType } from '../../theme/DefaultTheme/Theme.type';
import type { ITextProps } from './Text.type';

export const TextProps = compose(
  typography,
  space,
  color,
  layout,
  flexbox,
  border,
  fontSize,
  fontWeight
);

const StyledText = styled.Text(TextProps);

const Text: FC<ITextProps> = ({ children, variant, ...rest }) => {
  const theme = useTheme() as ThemeType;
  const style = theme.text[variant as keyof ThemeType['text']] ?? {};
  return (
    <StyledText {...style} {...rest}>
      {children}
    </StyledText>
  );
};

export { Text };
