const variantSolid = (props: any) => {
  const { colorScheme: c } = props;
  const {
    bg = `${c}.500`,
    textVariant = 'button',
    activeBg = `${c}.700`,
    disabledBg = `${c}.400`,
  } = {};

  return {
    bg,
    textVariant,
    activeBg,
    disabledBg,
  };
};

const variantOutline = (props: any) => {
  const { colorScheme: c } = props;
  const {
    borderColor = `${c}.500`,
    textVariant = 'button',
    activeBg = `${c}.700`,
    disabledBg = `${c}.300`,
  } = {};

  return {
    bg: 'transparent',
    borderColor,
    borderWidth: 1,
    textVariant,
    activeBg,
    disabledBg,
  };
};

const button = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    large: {
      height: 56,
      fontVariant: 'large',
      paddingHorizontal: 32,
    },
    medium: {
      height: 48,
      fontVariant: 'medium',
      paddingHorizontal: 24,
    },
    small: {
      height: 36,
      fontVariant: 'small',
      paddingHorizontal: 12,
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    solid: (props: any) => variantSolid(props),
    outline: (props: any) => variantOutline(props),
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: '',
    variant: '',
  },
};

export { button };
