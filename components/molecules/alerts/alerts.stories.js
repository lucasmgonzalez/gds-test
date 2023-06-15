import alertTwig from './alert.twig';

import alertData from './alert.yaml';

export default {
  title: 'Molecules/Alerts',
  argTypes: {
    alertType: {
      name: 'Alert Type',
      defaultValue: 'primary',
      options: ['primary', 'success', 'error', 'warning', 'gray'],
      control: {
        type: 'select',
        labels: {
          primary: 'Primary',
          success: 'Success',
          error: 'Error',
          warning: 'Warning',
          gray: 'Gray',
        },
      },
    },
  },
};

export const alerts = ({ alertType }) =>
  alertTwig({ ...alertData, alert_type: alertType });
