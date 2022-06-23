import React from 'react';
import styled from '@emotion/native';
import { typography, space, color, layout, flexbox, border, fontSize, fontWeight, compose, } from 'styled-system';
import { useTheme } from '@emotion/react';
export const TextProps = compose(typography, space, color, layout, flexbox, border, fontSize, fontWeight);
const StyledText = styled.Text(TextProps);
const Text = ({ children, variant, ...rest }) => {
    const theme = useTheme();
    const style = theme.text[variant] ?? {};
    return (React.createElement(StyledText, { ...style, ...rest }, children));
};
export { Text };
