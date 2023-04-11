import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

/** Used as the base value for calculating space. */
const grid = 4;
const px = (value: number | string) => `${value}px`;
const pxToRem = (value: number) => `${value / 16}rem`;

const spaceVars = {
  xxsmall: pxToRem(grid / 2),
  xsmall: pxToRem(grid),
  small: pxToRem(grid * 2),
  medium: pxToRem(grid * 4),
  large: pxToRem(grid * 8),
  xlarge: pxToRem(grid * 16),
  xxlarge: pxToRem(grid * 32),
};

export const root = createGlobalTheme(':root', {
  border: {
    radius: {
      small: pxToRem(grid / 2),
      medium: pxToRem(grid),
      large: pxToRem(grid * 2),
      full: px(9999),
    },
    width: {
      default: px(1),
    },
  },

  fonts: {
    heading: 'Georgia, Times, Times New Roman, serif',
    body: 'system-ui',
  },

  space: {
    none: '0',
    'inset-xxsmall': `${spaceVars.xxsmall} ${spaceVars.xxsmall} ${spaceVars.xxsmall} ${spaceVars.xxsmall}`,
    'inset-xsmall': `${spaceVars.xsmall} ${spaceVars.xsmall} ${spaceVars.xsmall} ${spaceVars.xsmall}`,
    'inset-small': `${spaceVars.small} ${spaceVars.small} ${spaceVars.small} ${spaceVars.small}`,
    'inset-medium': `${spaceVars.medium} ${spaceVars.medium} ${spaceVars.medium} ${spaceVars.medium}`,
    'inset-large': `${spaceVars.large} ${spaceVars.large} ${spaceVars.large} ${spaceVars.large}`,
    'inset-xlarge': `${spaceVars.xlarge} ${spaceVars.xlarge} ${spaceVars.xlarge} ${spaceVars.xlarge}`,
    'inset-xxlarge': `${spaceVars.xxlarge} ${spaceVars.xxlarge} ${spaceVars.xxlarge} ${spaceVars.xxlarge}`,

    'inline-xxsmall': `0 ${spaceVars.xxsmall} 0 0`,
    'inline-xsmall': `0 ${spaceVars.xsmall} 0 0`,
    'inline-small': `0 ${spaceVars.medium} 0 0`,
    'inline-large': `0 ${spaceVars.large} 0 0`,
    'inline-xlarge': `0 ${spaceVars.xlarge} 0 0`,
    'inline-xxlarge': `0 ${spaceVars.xxlarge} 0 0`,

    'stack-xxsmall': `0 0 ${spaceVars.xxsmall} 0`,
    'stack-xsmall': `0 0 ${spaceVars.xsmall} 0`,
    'stack-small': `0 0 ${spaceVars.small} 0`,
    'stack-medium': `0 0 ${spaceVars.medium} 0`,
    'stack-large': `0 0 ${spaceVars.large} 0`,
    'stack-xlarge': `0 0 ${spaceVars.xlarge} 0`,
    'stack-xxlarge': `0 0 ${spaceVars.xxlarge} 0`,

    'stretch-xxsmall': `0 ${spaceVars.xxsmall} 0 ${spaceVars.xxsmall}`,
    'stretch-xsmall': `${spaceVars.xxsmall} ${spaceVars.xsmall} ${spaceVars.xxsmall} ${spaceVars.xsmall}`,
    'stretch-small': `${spaceVars.xsmall} ${spaceVars.small} ${spaceVars.xsmall} ${spaceVars.small}`,
    'stretch-medium': `${spaceVars.small} ${spaceVars.medium} ${spaceVars.small} ${spaceVars.medium}`,
    'stretch-large': `${spaceVars.medium} ${spaceVars.large} ${spaceVars.medium} ${spaceVars.large}`,
    'stretch-xlarge': `${spaceVars.large} ${spaceVars.xlarge} ${spaceVars.large} ${spaceVars.xlarge}`,
    'stretch-xxlarge': `${spaceVars.xlarge} ${spaceVars.xxlarge} ${spaceVars.xlarge} ${spaceVars.xxlarge}`,

    'squash-xxsmall': `${spaceVars.xxsmall} 0 ${spaceVars.xxsmall} 0`,
    'squash-xsmall': `${spaceVars.xsmall} ${spaceVars.xxsmall} ${spaceVars.xsmall} ${spaceVars.xxsmall}`,
    'squash-small': `${spaceVars.small} ${spaceVars.xsmall} ${spaceVars.small} ${spaceVars.xsmall}`,
    'squash-medium': `${spaceVars.medium} ${spaceVars.small} ${spaceVars.medium} ${spaceVars.small}`,
    'squash-large': `${spaceVars.large} ${spaceVars.medium} ${spaceVars.large} ${spaceVars.medium}`,
    'squash-xlarge': `${spaceVars.xlarge} ${spaceVars.large} ${spaceVars.xlarge} ${spaceVars.large}`,
    'squash-xxlarge': `${spaceVars.xxlarge} ${spaceVars.xlarge} ${spaceVars.xxlarge} ${spaceVars.xlarge}`,
  },
});

/**
 * Creates a contract of locally scoped variable names for themes to implement.
 * https://vanilla-extract.style/documentation/api/create-theme-contract/
 *
 * Contract schema for colors is derived from https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale
 */
export const colors = createThemeContract({
  background: {
    canvas: '',
    surface: '',

    primary: '',
    primaryHover: '',
    primaryActive: '',
    primaryEmphasis: '',
    primaryEmphasisHover: '',

    accent: '',
    accentHover: '',
    accentActive: '',
    accentEmphasis: '',
    accentEmphasisHover: '',

    positive: '',
    positiveHover: '',
    positiveActive: '',
    positiveEmphasis: '',
    positiveEmphasisHover: '',

    critical: '',
    criticalHover: '',
    criticalActive: '',
    criticalEmphasis: '',
    criticalEmphasisHover: '',

    caution: '',
    cautionHover: '',
    cautionActive: '',
    cautionEmphasis: '',
    cautionEmphasisHover: '',

    information: '',
    informationHover: '',
    informationActive: '',
    informationEmphasis: '',
    informationEmphasisHover: '',
  },
  foreground: {
    regularHighContrast: '',
    regularLowContrast: '',

    accentHighContrast: '',
    accentLowContrast: '',
  },
  border: {
    // 6, subtle/muted (non-interactive elements)
    // 7, interactive components/focus rings
    // 8, interactive hover
  },
});

export const vars = { ...root, colors };
