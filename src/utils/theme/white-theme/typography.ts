import { palette } from './palette';

export const typography = {
  fontFamily: 'Cabin, Roboto, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  h1: {
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '40px',
  },
  h2: {
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '32px',
    letterSpacing: '-0.01em',
    fontFeatureSettings: 'case on, titl on, ordn on, ss02 on, cpsp on, ss01 on',
    color: palette.common?.black,
  },
  h3: {
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: 1.6,
    letterSpacing: '-0.01em',
  },
  h4: {
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: 600,
    letterSpacing: '0.01em',
  },
  error: {
    color: 'error.main',
  },
  body1: {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.002em',
  },
  body2: {
    fontWeight: 500,
    fontSize: '13px',
    lineHeight: '16px',
    letterSpacing: '0.005em',
    color: '#7C8993',
  },
  button: {
    fontSize: '16px',
    lineHeight: 1.5,
    fontWeight: 600,
    letterSpacing: '0.005em',
  },
};
