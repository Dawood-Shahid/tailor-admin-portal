export type ActivityType = 'new_customer' | 'new_measurement';

export interface ActivityEvent {
  id: string;
  customerName: string;
  description: string;
  type: ActivityType;
  timestamp: string;
}

export interface DashboardData {
  totalCustomers: number;
  recentActivity: ActivityEvent[];
}
