import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';

import type { Sprinkles } from '../style/sprinkles.css';
import { sprinkles } from '../style/sprinkles.css';

export type BoxProps<T extends ElementType> = {
  component?: T;
} & Sprinkles;

type Props<T extends ElementType> = PropsWithChildren<BoxProps<T>> &
  ComponentPropsWithoutRef<T>;

export const Box = <T extends ElementType = 'div'>({
  component,
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  inset,
  alignItems,
  justifyContent,
  flexDirection,
  flexWrap,
  flexShrink,
  flexGrow,
  gap,
  display,
  margin,
  // boxShadow,
  // borderStyle,
  // borderWidth,
  borderRadius,
  borderColor,
  // width,
  // height,
  padding,
  background,
  fontSize,
  // lineHeight,
  // fontFamily,
  // fontWeight,
  // fontStyle,
  // textAlign,
  // textTransform,
  color,
  pointerEvents,
  cursor,
  children,
  ...restProps
}: Props<T>) => {
  const ElementType = component || 'div';

  return (
    <ElementType
      className={sprinkles({
        position,
        top,
        right,
        bottom,
        left,
        inset,
        alignItems,
        justifyContent,
        flexDirection,
        flexWrap,
        flexShrink,
        flexGrow,
        gap,
        display,
        margin,
        borderRadius,
        borderColor,
        padding,
        background,
        color,
        pointerEvents,
        cursor,
      })}
      {...restProps}
    >
      {children}
    </ElementType>
  );
};
