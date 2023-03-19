import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

export const root = createGlobalTheme(':root', {
  space: {
    xxsmall: '0.125rem',
    xsmall: '0.25rem',
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
    xlarge: '4rem',
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
 * Contract schema is derived from https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale
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
