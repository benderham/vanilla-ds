import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

/** Used as the base value for calculating space. */
const grid = 4;
const pxToRem = (value: number) => `${value / 16}rem`;

const space = {
  xxsmall: pxToRem(grid / 2),
  xsmall: pxToRem(grid),
  small: pxToRem(grid * 2),
  medium: pxToRem(grid * 4),
  large: pxToRem(grid * 8),
  xlarge: pxToRem(grid * 16),
  xxlarge: pxToRem(grid * 32),
};

export const root = createGlobalTheme(':root', {
  space: {
    none: '0',
    'inset-xxsmall': `${space.xxsmall} ${space.xxsmall} ${space.xxsmall} ${space.xxsmall}`,
    'inset-xsmall': `${space.xsmall} ${space.xsmall} ${space.xsmall} ${space.xsmall}`,
    'inset-small': `${space.small} ${space.small} ${space.small} ${space.small}`,
    'inset-medium': `${space.medium} ${space.medium} ${space.medium} ${space.medium}`,
    'inset-large': `${space.large} ${space.large} ${space.large} ${space.large}`,
    'inset-xlarge': `${space.xlarge} ${space.xlarge} ${space.xlarge} ${space.xlarge}`,
    'inset-xxlarge': `${space.xxlarge} ${space.xxlarge} ${space.xxlarge} ${space.xxlarge}`,

    'inline-xxsmall': `0 ${space.xxsmall} 0 0`,
    'inline-xsmall': `0 ${space.xsmall} 0 0`,
    'inline-small': `0 ${space.medium} 0 0`,
    'inline-large': `0 ${space.large} 0 0`,
    'inline-xlarge': `0 ${space.xlarge} 0 0`,
    'inline-xxlarge': `0 ${space.xxlarge} 0 0`,

    'stack-xxsmall': `0 0 ${space.xxsmall} 0`,
    'stack-xsmall': `0 0 ${space.xsmall} 0`,
    'stack-small': `0 0 ${space.small} 0`,
    'stack-medium': `0 0 ${space.medium} 0`,
    'stack-large': `0 0 ${space.large} 0`,
    'stack-xlarge': `0 0 ${space.xlarge} 0`,
    'stack-xxlarge': `0 0 ${space.xxlarge} 0`,

    'stretch-xxsmall': `0 ${space.xxsmall} 0 ${space.xxsmall}`,
    'stretch-xsmall': `${space.xxsmall} ${space.xsmall} ${space.xxsmall} ${space.xsmall}`,
    'stretch-small': `${space.xsmall} ${space.small} ${space.xsmall} ${space.small}`,
    'stretch-medium': `${space.small} ${space.medium} ${space.small} ${space.medium}`,
    'stretch-large': `${space.medium} ${space.large} ${space.medium} ${space.large}`,
    'stretch-xlarge': `${space.large} ${space.xlarge} ${space.large} ${space.xlarge}`,
    'stretch-xxlarge': `${space.xlarge} ${space.xxlarge} ${space.xlarge} ${space.xxlarge}`,

    'squash-xxsmall': `${space.xxsmall} 0 ${space.xxsmall} 0`,
    'squash-xsmall': `${space.xsmall} ${space.xxsmall} ${space.xsmall} ${space.xxsmall}`,
    'squash-small': `${space.small} ${space.xsmall} ${space.small} ${space.xsmall}`,
    'squash-medium': `${space.medium} ${space.small} ${space.medium} ${space.small}`,
    'squash-large': `${space.large} ${space.medium} ${space.large} ${space.medium}`,
    'squash-xlarge': `${space.xlarge} ${space.large} ${space.xlarge} ${space.large}`,
    'squash-xxlarge': `${space.xxlarge} ${space.xlarge} ${space.xxlarge} ${space.xlarge}`,
  },

  fonts: {
    heading: 'Georgia, Times, Times New Roman, serif',
    body: 'system-ui',
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
