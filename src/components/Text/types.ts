import type * as CSS from 'csstype';
import type { TextProps as RNTextProps } from 'react-native';
import type { ViewProps } from '../Box/types';
import type { Theme } from '../../theme';

export interface TextProps extends RNTextProps, ViewProps {
  variant: keyof Theme['text'];
  color?: CSS.Property.Color;
  textDecorationColor?: CSS.Property.Color;
  fontStyle?: 'normal' | 'italic';
  fontFamily?: string;
  fontVariant?:
    | 'small-caps'
    | 'oldstyle-nums'
    | 'lining-nums'
    | 'tabular-nums'
    | 'proportional-nums';
  letterSpacing?: number;
  lineHeight?: number;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  includeFontPadding?: boolean;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center';
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed';
  textTransformation?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  textAlignmentsVertical?: 'auto' | 'top' | 'bottom' | 'center';
  writingDirections?: 'auto' | 'ltr' | 'rtl';
  textShadowColor?: CSS.Property.Color;
  textShadowOffset?: { width?: number; height?: number };
  textShadowRadius?: number;
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  width?: number | string;
  height?: number | string;
  flex?: number;
}