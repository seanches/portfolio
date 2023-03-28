import { PaletteOptions } from '@mui/material';

const PRIMARY_COLOR = '#353A49';

export const palette: PaletteOptions = {
  primary: {
    light: '#838AA4',
    main: PRIMARY_COLOR,
  },
  secondary: {
    main: '#6B674B',
    light: '#B5AF8C',
  },
  success: {
    light: '#DCF5DC',
    main: '#60BF77',
    dark: '#42A755',
  },
  error: {
    light: '#FAE3E6',
    main: '#E01A3E',
    dark: '#C5002A',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#586065',
  },
  warning: {
    light: '#FCF2CA',
    main: '#FFBB22',
    dark: '#F8A111',
  },
  grey: {
    50: '#F5F7F9',
    100: '#F7F9FA',
    200: '#F0F3F5',
    300: '#DCE0E3',
    400: '#BEC7CF',
    500: '#959DA3',
    600: '#757E85',
    700: '#475159',
    800: '#2A333A',
    900: '#08131A',
  },
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
};
