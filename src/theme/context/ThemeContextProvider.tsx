import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { defaultTheme } from '../defaultTheme';

const adjustedTheme = (theme?: object) => ({
  ...defaultTheme,
  ...theme,
});

const PaltaProvider: React.FC<{ theme?: object }> = ({ children, theme }) => {
  const finalTheme = adjustedTheme(theme);
  return <ThemeProvider theme={finalTheme}>{children}</ThemeProvider>;
};

export default PaltaProvider