import type * as CSS from 'csstype';

type Spaces = 2 | 4 | 6 | 8 | 12 | 16 | 24 | 32

export interface LayoutProps {
  //LAYOUT PROPS
  alignContent?:
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'space-between'
  | 'space-around';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignSelf?:
  | 'auto'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline';
  aspectRatio?: number;
  bottom?: number | string;
  direction?: 'inherit' | 'ltr' | 'rtl';
  display?: 'none' | 'flex';
  end?: number | string;
  flex?: number;
  flexBasis?: number | string;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexGrow?: number;
  flexShrink?: number;
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  height?: number | string;
  justifyContent?:
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
  left?: number;
  margin?: Spaces;
  marginBottom?: number | string;
  marginEnd?: number | string;
  marginHorizontal?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginStart?: number | string;
  marginTop?: number | string;
  marginVertical?: number | string;
  maxHeight?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  minWidth?: number | string;
  overflow?: 'visible' | 'hidden' | 'scroll';
  padding?: number | string;
  paddingBottom?: number | string;
  paddingEnd?: number | string;
  paddingHorizontal?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingStart?: number | string;
  paddingTop?: number | string;
  paddingVertical?: number | string;
  position?: 'absolute' | 'relative';
  right?: number | string;
  start?: number | string;
  top?: number | string;
  width?: number | string;
  zIndex?: number;
}

export interface ViewProps {
  backfaceVisibility?: 'visible' | 'hidden';
  bg?: CSS.Property.BackgroundColor;
  backgroundColor?: CSS.Property.BackgroundColor;
  borderBottomColor?: CSS.Property.BorderBottomColor;
  borderBottomEndRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderBottomStartRadius?: number;
  borderBottomWidth?: number;
  borderColor?: CSS.Property.BorderColor;
  borderEndColor?: CSS.Property.BorderColor;
  borderLeftColor?: CSS.Property.BorderColor;
  borderLeftWidth?: number;
  borderRadius?: number;
  borderRightColor?: CSS.Property.BorderColor;
  borderRightWidth?: number;
  borderStartColor?: CSS.Property.BorderColor;
  borderStyle?: 'solid' | 'dotted' | 'dashed';
  borderTopColor?: CSS.Property.BorderColor;
  borderTopEndRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderTopStartRadius?: number;
  borderTopWidth?: number;
  borderEndWidth?: number;
  borderWidth?: number;
  elevation?: number;
  opacity?: number;
  gap?: number;
}

export interface BoxProps extends LayoutProps, ViewProps {
  // SHADOW
  shadowColor?: CSS.Property.BorderColor;
  shadowOffset?: {
    width: number;
    height: number;
  };
  shadowOpacity?: number;
  shadowRadius?: number;
}

export type SpacingProps = Pick<LayoutProps, 'margin' | 'marginLeft' | 'marginRight' |
  'marginBottom' | 'marginTop' | 'marginEnd' | 'marginHorizontal' | 'marginStart' |
  'marginVertical' | 'padding' | 'paddingBottom' | 'paddingEnd' | 'paddingHorizontal' |
  'paddingLeft' | 'paddingRight' | 'paddingStart' | 'paddingTop' | 'paddingVertical' | 
  'left' | 'right' | 'top' | 'bottom'>