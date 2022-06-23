import styled from '@emotion/native';
import { space, color, layout, flexbox, border, position, shadow, compose, } from 'styled-system';
export const viewProps = compose(layout, color, space, border, position, shadow, flexbox);
const Box = styled.View(viewProps);
export { Box };
