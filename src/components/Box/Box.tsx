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

import type { IBox } from './Box.type';
export const viewProps = compose(
  layout,
  color,
  space,
  border,
  position,
  shadow,
  flexbox
);

const Box: FC<IBox> = styled.View(viewProps);
export { Box };
