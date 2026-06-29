import { Search, UserPlus, Users } from 'lucide-react';
import ActivityFeed from '@/components/dashboard/activityFeed';
import PageHeader from '@/components/layout/pageHeader';
import QuickActionCard from '@/components/ui/quickActionCard';
import StatCard from '@/components/ui/statCard';
import { dashboardData } from '../lib/mock/dashboard';

export default function Home() {
  const { totalCustomers, recentActivity } = dashboardData;

  return (
    <main className='background-light flex-1 overflow-y-auto p-6 md:p-8'>
      <PageHeader
        title='Dashboard'
        subtitle="Welcome back! Here's an overview of your business."
      />

      <div className='space-y-8'>
        <StatCard
          label='Total Customers'
          value={totalCustomers}
          icon={Users}
        />

        <section>
          <h2 className='mb-4 text-lg font-semibold foreground-heading'>
            Quick Actions
          </h2>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <QuickActionCard
              title='Add Customer'
              description='Create a new customer profile.'
              href='/customers?action=add'
              icon={UserPlus}
            />
            <QuickActionCard
              title='Search Customer'
              description='Find and manage existing customers.'
              href='/customers?focus=search'
              icon={Search}
            />
          </div>
        </section>

        <section>
          <h2 className='mb-4 text-lg font-semibold foreground-heading'>
            Recent Activity
          </h2>
          <ActivityFeed events={recentActivity} />
        </section>
      </div>
    </main>
  );
}
