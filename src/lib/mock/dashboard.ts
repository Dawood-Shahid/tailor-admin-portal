import type { DashboardData } from '../types/dashboard';

export const dashboardData: DashboardData = {
  totalCustomers: 248,
  recentActivity: [
    {
      id: '1',
      customerName: 'John Smith',
      description: 'Shirt measurements added.',
      type: 'new_measurement',
      timestamp: 'Today',
    },
    {
      id: '2',
      customerName: 'Emily Johnson',
      description: 'Customer profile created.',
      type: 'new_customer',
      timestamp: 'Yesterday',
    },
  ],
};
