import { Colors } from ".";


const defaultTheme = {
  colors: {
    palta: 'lightgreen',
    backgrounds: {
      primary: '#FFFFFF',
      secondary: '#EBEBEB',
    },
    ...Colors,
  },
  colorSchemas: {
    blue: {
      base: Colors.blue['500'],
      highlight: Colors.blue['400'],
      active: Colors.blue['600'],
      disabled: Colors.blue['300'],
    },
  },
  components: {
    // button,
  },
  buttons: {
    primary: {
      bg: 'palta',
      padding: 10,
      borderRadius: 8,
      color: 'white',
      fontSize: 16,
      fontWeight: '900',
      shadowColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  text: {
    large: {
      fontSize: 40,
      lineHeight: 52,
      fontWeight: 'bold',
    },
    medium: {
      fontSize: 36,
      lineHeight: 42,
      fontWeight: '500',
    },
    small: {
      fontSize: 24,
      lineHeight: 28,
      fontWeight: '300',
    },
    micro: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '200',
    },
    button: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: 'bold',
    },
  },
};

export default defaultTheme

export type Theme = typeof defaultTheme;