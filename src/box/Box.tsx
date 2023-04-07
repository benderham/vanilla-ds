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
  borderColor,
  background,
  color,
  children,
  ...restProps
}: Props<T>) => {
  // sprinkles is only for props that we want to have set values (e.g. tokens) for...

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
        borderColor,
        background,
        color,
      })}
      {...restProps}
    >
      {children}
    </ElementType>
  );
};
