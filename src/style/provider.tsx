import type { PropsWithChildren } from 'react';

import { dark } from './theme-dark.css';
import { light } from './theme-light.css';

import './reset.css';
import './theme.css';

export type ThemeProviderProps = PropsWithChildren;

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const userPrefersDarkColorScheme = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  return (
    <div className={userPrefersDarkColorScheme ? dark : light}>{children}</div>
  );
};
