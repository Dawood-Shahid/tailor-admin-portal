import type { ActivityEvent } from '../../../lib/types/dashboard';
import ActivityItem from '@/components/dashboard/activityItem';

interface ActivityFeedProps {
  events: ActivityEvent[];
}

const ActivityFeed = ({ events }: ActivityFeedProps) => {
  if (events.length === 0) {
    return (
      <div className='background rounded-lg border border-[var(--app-border)] px-5 py-8 text-center text-sm text-[var(--app-text-secondary)]'>
        No recent activity
      </div>
    );
  }

  return (
    <div className='background overflow-hidden rounded-lg border border-[var(--app-border)]'>
      {events.map((event) => (
        <ActivityItem key={event.id} event={event} />
      ))}
    </div>
  );
};

export default ActivityFeed;
