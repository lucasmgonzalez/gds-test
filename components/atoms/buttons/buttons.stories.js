// Buttons Stories
import buttonTwig from './button.twig';

import buttonData from './button.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/Button',
  argTypes: {
    size: {
      name: 'Size',
      defaultValue: 'md',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: {
        type: 'select',
        labels: {
          xs: 'Extra Small',
          sm: 'Small',
          md: 'Medium',
          lg: 'Large',
          xl: 'Extra Large',
        },
      },
    },
    color: {
      name: 'Color',
      defaultValue: 'primary',
      options: [
        'primary',
        'dark',
        'gray',
        'white',
        'success',
        'error',
        'warning',
      ],
      control: {
        type: 'select',
        labels: {
          primary: 'Primary',
          dark: 'Dark',
          gray: 'Gray',
          white: 'White',
          success: 'Success',
          error: 'Error',
          warning: 'Warning',
        },
      },
    },
    outline: {
      name: 'Outline Variant',
      defaultValues: false,
      control: {
        type: 'boolean',
      },
    },
  },
};

export const button = ({ size, color, outline }) =>
  buttonTwig({
    ...buttonData,
    size_modifier: size,
    color_modifier: color,
    outline_variant: outline,
  });

export const prefixIconButton = ({ size, color, outline }) =>
  buttonTwig({
    ...buttonData,
    prefix_icon: 'check_circle',
    size_modifier: size,
    color_modifier: color,
    outline_variant: outline,
  });

export const suffixIconButton = ({ size, color, outline }) =>
  buttonTwig({
    ...buttonData,
    suffix_icon: 'check_circle',
    size_modifier: size,
    color_modifier: color,
    outline_variant: outline,
  });

export const doubleIconButton = ({ size, color, outline }) =>
  buttonTwig({
    ...buttonData,
    prefix_icon: 'check_circle',
    suffix_icon: 'check_circle',
    size_modifier: size,
    color_modifier: color,
    outline_variant: outline,
  });
