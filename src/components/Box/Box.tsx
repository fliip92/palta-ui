import styled from '@emotion/native';
import type { FC } from 'react';
import {
  space,
  color,
  layout,
  flexbox,
  border,
  position,
  shadow,
  compose,
} from 'styled-system';
import type { BoxProps } from './types';

export const viewProps = compose(
  layout,
  color,
  space,
  border,
  position,
  shadow,
  flexbox
);

const Box: FC<BoxProps> = styled.View(viewProps);

export default Box