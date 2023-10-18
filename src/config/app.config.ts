interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Finance Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Finance Manager', 'Sales Representative', 'Customer Service Representative'],
  tenantName: 'Merchant',
  applicationName: 'All Bill Payments App',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read merchant information',
    'Update user information',
    'Create a booking',
  ],
  ownerAbilities: ['Manage user data', 'Manage merchant data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/a957ae70-8d41-4f8f-8902-2c878e24f2d1',
};
