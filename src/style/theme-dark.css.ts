import {
  crimsonDark,
  blueDark,
  greenDark,
  grayDark,
  orangeDark,
  redDark,
  tealDark,
} from '@radix-ui/colors';
import { createTheme } from '@vanilla-extract/css';
import { colors } from './theme.css';

export const dark = createTheme(colors, {
  background: {
    canvas: grayDark.gray1,
    surface: grayDark.gray2,

    primary: crimsonDark.crimson3,
    primaryHover: crimsonDark.crimson4,
    primaryActive: crimsonDark.crimson5,
    primaryEmphasis: crimsonDark.crimson9,
    primaryEmphasisHover: crimsonDark.crimson10,

    accent: tealDark.teal3,
    accentHover: tealDark.teal4,
    accentActive: tealDark.teal5,
    accentEmphasis: tealDark.teal9,
    accentEmphasisHover: tealDark.teal10,

    positive: greenDark.green3,
    positiveHover: greenDark.green4,
    positiveActive: greenDark.green5,
    positiveEmphasis: greenDark.green9,
    positiveEmphasisHover: greenDark.green10,

    critical: redDark.red3,
    criticalHover: redDark.red4,
    criticalActive: redDark.red5,
    criticalEmphasis: redDark.red9,
    criticalEmphasisHover: redDark.red10,

    caution: orangeDark.orange3,
    cautionHover: orangeDark.orange4,
    cautionActive: orangeDark.orange5,
    cautionEmphasis: orangeDark.orange9,
    cautionEmphasisHover: orangeDark.orange10,

    information: blueDark.blue3,
    informationHover: blueDark.blue4,
    informationActive: blueDark.blue5,
    informationEmphasis: blueDark.blue9,
    informationEmphasisHover: blueDark.blue10,
  },
  foreground: {
    regularHighContrast: grayDark.gray12,
    regularLowContrast: grayDark.gray11,

    accentHighContrast: tealDark.teal12,
    accentLowContrast: tealDark.teal11,
  },
  border: {},
});
