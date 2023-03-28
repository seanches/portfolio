import { createTheme, SxProps, Theme } from '@mui/material/styles';

import baseTheme from './base-theme';

const theme = createTheme(baseTheme);

export default theme;

export type SxStyles = Record<string, SxProps<Theme>>;