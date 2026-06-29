import type { ActivityEvent } from '../../../lib/types/dashboard';
import Badge from '@/components/ui/badge';

interface ActivityItemProps {
  event: ActivityEvent;
}

const ActivityItem = ({ event }: ActivityItemProps) => {
  return (
    <div className='flex items-start justify-between gap-4 border-b border-[var(--app-border)] px-5 py-4 last:border-b-0'>
      <div className='min-w-0 flex-1'>
        <p className='font-medium foreground-primary'>{event.customerName}</p>
        <p className='mt-0.5 text-sm foreground-text'>{event.description}</p>
      </div>
      <div className='flex shrink-0 flex-col items-end gap-2 sm:flex-row sm:items-center'>
        <Badge type={event.type} />
        <span className='text-sm whitespace-nowrap text-[var(--app-text-secondary)]'>
          {event.timestamp}
        </span>
      </div>
    </div>
  );
};

export default ActivityItem;
