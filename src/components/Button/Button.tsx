import React, { FC, useCallback, useState } from 'react';
import styled from '@emotion/native';
import { space, layout, typography, color, shadow } from 'styled-system';
import { useTheme } from '@emotion/react';
import type { ThemeType } from 'src/theme/DefaultTheme/Theme.type';
import { Text } from '../Text/Text';

const BtnWrapper = styled.Pressable`
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${shadow}
`;

interface Props {
  variant: keyof ThemeType['components']['button']['variants'] | string;
  colorScheme?: keyof ThemeType['colorSchemas'] | string;
  disabled?: boolean;
}

const Button: FC<Props> = ({
  variant,
  colorScheme = 'blue',
  children,
  disabled = false,
  ...rest
}) => {
  const theme = useTheme() as ThemeType;
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
  return (
    <BtnWrapper
      {...theme.buttons[variant as keyof ThemeType['buttons']]}
      opacity={disabled ? 0.3 : 1}
      {...rest}
      {...{ onPressIn, onPressOut }}
      bg={bg}
    >
      <Text variant={baseStyle.textVariant} color="white">
        {children}
      </Text>
    </BtnWrapper>
  );
};

export { Button };
