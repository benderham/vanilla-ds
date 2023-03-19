import {
  blue,
  crimson,
  gray,
  green,
  orange,
  red,
  teal,
} from '@radix-ui/colors';
import { createTheme } from '@vanilla-extract/css';
import { colors } from './theme.css';

export const light = createTheme(colors, {
  background: {
    canvas: '#ffffff',
    surface: gray.gray1,

    primary: crimson.crimson3,
    primaryHover: crimson.crimson4,
    primaryActive: crimson.crimson5,
    primaryEmphasis: crimson.crimson9,
    primaryEmphasisHover: crimson.crimson10,

    accent: teal.teal3,
    accentHover: teal.teal4,
    accentActive: teal.teal5,
    accentEmphasis: teal.teal9,
    accentEmphasisHover: teal.teal10,

    positive: green.green3,
    positiveHover: green.green4,
    positiveActive: green.green5,
    positiveEmphasis: green.green9,
    positiveEmphasisHover: green.green10,

    critical: red.red3,
    criticalHover: red.red4,
    criticalActive: red.red5,
    criticalEmphasis: red.red9,
    criticalEmphasisHover: red.red10,

    caution: orange.orange3,
    cautionHover: orange.orange4,
    cautionActive: orange.orange5,
    cautionEmphasis: orange.orange9,
    cautionEmphasisHover: orange.orange10,

    information: blue.blue3,
    informationHover: blue.blue4,
    informationActive: blue.blue5,
    informationEmphasis: blue.blue9,
    informationEmphasisHover: blue.blue10,
  },
  foreground: {
    regularHighContrast: gray.gray12,
    regularLowContrast: gray.gray11,

    accentHighContrast: teal.teal12,
    accentLowContrast: teal.teal11,
  },
  border: {},
});
