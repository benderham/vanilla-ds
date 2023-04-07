import type { ConditionalValue } from '@vanilla-extract/sprinkles';
import {
  createMapValueFn,
  createNormalizeValueFn,
  createSprinkles,
  defineProperties,
} from '@vanilla-extract/sprinkles';

import { vars } from './theme.css';

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    // Position & Layout
    position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
    alignItems: ['flex-start', 'center', 'flex-end'],
    justifyContent: ['flex-start', 'center', 'flex-end', 'space-between'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    gap: vars.space,
    // Display & Visibility

    // Clipping

    // Animation

    // Box Model (Outside In)

    // Typography
  },
});

/**
 *  Creates a function for mapping over conditional values.
 *  https://vanilla-extract.style/documentation/packages/sprinkles/#createmapvaluefn
 */
export const mapResponsiveValue = createMapValueFn(responsiveProperties);

/**
 * Creates a function for normalizing conditional values into a consistent object
 * structure. Any primitive values or responsive arrays will be converted to conditional objects.
 * https://vanilla-extract.style/documentation/packages/sprinkles/#createnormalizevaluefn
 */
export const normalizeResponsiveValue =
  createNormalizeValueFn(responsiveProperties);

export type ResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveProperties,
  Value
>;

const unresponsiveProperties = defineProperties({
  properties: {
    // Position & Layout
    zIndex: [-1, 0, 1],
    top: [0],
    right: [0],
    bottom: [0],
    left: [0],
    flexWrap: ['wrap', 'nowrap', 'wrap-reverse'],
    flexShrink: [0],
    flexGrow: [0, 1],

    // Display & Visibility

    // Clipping

    // Animation

    // Box Model (Outside In)
    // borderRadius: vars.border.radius,
    // width: { full: '100%' },

    // Background

    // Typography

    cursor: ['pointer'],
  },
  shorthands: {
    inset: ['top', 'right', 'bottom', 'left'],
  },
});

const colorProperties = defineProperties({
  properties: {
    // Box Model (Outside In)
    borderColor: vars.colors.border,
    // Background
    background: vars.colors.background,
    // Typography
    color: vars.colors.foreground,
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  unresponsiveProperties,
  colorProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
