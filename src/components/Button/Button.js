import React, { useCallback, useState } from 'react';
import styled from '@emotion/native';
import { space, layout, typography, color, shadow } from 'styled-system';
import { useTheme } from '@emotion/react';
import { Text } from '../Text/Text';
const BtnWrapper = styled.Pressable `
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${shadow}
`;
const Button = ({ variant, colorScheme = 'blue', children, disabled = false, ...rest }) => {
    const theme = useTheme();
    const [active, setActive] = useState(false);
    const onPressIn = useCallback(() => {
        setActive(true);
    }, []);
    const onPressOut = useCallback(() => {
        setActive(false);
    }, []);
    const baseStyle = theme.components.button.variants.solid({ colorScheme });
    const bg = active
        ? baseStyle.activeBg
        : disabled
            ? baseStyle.disabledBg
            : baseStyle.bg;
    return (React.createElement(BtnWrapper, { ...theme.buttons[variant], opacity: disabled ? 0.3 : 1, ...rest, ...{ onPressIn, onPressOut }, bg: bg },
        React.createElement(Text, { variant: baseStyle.textVariant, color: "white" }, children)));
};
export { Button };
