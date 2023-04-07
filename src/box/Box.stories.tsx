import type { Meta, StoryObj } from '@storybook/react';

import type { BoxProps } from './Box';
import { Box } from './Box';

export default {
  title: 'Layout/Box',
  component: Box,
  parameters: {
    docs: {
      description: {
        component: `Box is a general purpose low-level primitive with no specific
        semantics that can be used for layout and styling. All other layout primitives,
        and most of the design system components, are made up of Boxes.`,
      },
    },
  },
} satisfies Meta<BoxProps<'div'>>;

export const Default = {
  args: {
    children: 'Box Component',
  },
  render: (args) => <Box {...args} />,
} satisfies StoryObj<BoxProps<'div'>>;

export const AsSpanComponent = {
  args: {
    component: 'span',
    children: 'Box as a Span Component',
  },
  render: (args) => (
    <Box {...args} color="regularHighContrast" background="accent" />
  ),
} satisfies StoryObj<BoxProps<'span'>>;

export const WithAriaLabel = {
  args: {
    'aria-label': 'Box',
    children: 'Box Component w/Aria Label',
  },
  render: (args) => <Box {...args} />,
} satisfies StoryObj<BoxProps<'div'>>;
