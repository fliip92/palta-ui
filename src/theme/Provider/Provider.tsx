import { ThemeProvider } from '@emotion/react';
import React, { FC } from 'react';
import { defaultTheme } from '../DefaultTheme/Theme';

const adjustedTheme = (theme?: object) => ({
  ...defaultTheme,
  ...theme,
});

const Palta: FC<{ theme?: object }> = ({ children, theme }) => {
  const finalTheme = adjustedTheme(theme);
  return <ThemeProvider theme={finalTheme}>{children}</ThemeProvider>;
};

export { Palta };
