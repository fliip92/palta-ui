export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}
export { Box } from './components/Box/Box';
export { Button } from './components/Button/Button';
export { Text } from './components/Text/Text';
export { Palta } from './theme/Provider/Provider';
export { ThemeType } from './theme/DefaultTheme/Theme.type';
