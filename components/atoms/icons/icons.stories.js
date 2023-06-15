// Buttons Stories
import checkCircleTwig from './check_circle.twig';
import closeTwig from './close.twig';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/Icon',
  argTypes: {
    size: {
      name: 'Size',
      defaultValue: 'md',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      control: {
        type: 'select',
        labels: {
          xs: 'Extra Small',
          sm: 'Small',
          md: 'Medium',
          lg: 'Large',
          xl: 'Extra Large',
          xxl: 'Extra Extra Large',
        },
      },
    },
  },
};

export const checkCircle = ({ size }) =>
  checkCircleTwig({ size_modifier: size });
export const close = ({ size }) => closeTwig({ size_modifier: size });
