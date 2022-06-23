import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { defaultTheme } from '../DefaultTheme/Theme';
const adjustedTheme = (theme) => ({
    ...defaultTheme,
    ...theme,
});
const Palta = ({ children, theme }) => {
    const finalTheme = adjustedTheme(theme);
    return React.createElement(ThemeProvider, { theme: finalTheme }, children);
};
export { Palta };
