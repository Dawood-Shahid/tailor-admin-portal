import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: number;
  icon: LucideIcon;
}

const StatCard = ({ label, value, icon: Icon }: StatCardProps) => {
  return (
    <div className='background max-w-sm rounded-lg border border-[var(--app-border)] p-5'>
      <div className='flex items-center gap-4'>
        <div className='primary-active-background-opacity flex h-12 w-12 shrink-0 items-center justify-center rounded-full'>
          <Icon className='h-6 w-6 foreground-primary' />
        </div>
        <div>
          <p className='text-sm text-[var(--app-text-secondary)]'>{label}</p>
          <p className='text-3xl font-semibold foreground-heading'>{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
