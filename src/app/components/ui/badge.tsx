import clsx from 'clsx';
import type { ActivityType } from '../../../lib/types/dashboard';

const badgeConfig: Record<
  ActivityType,
  { label: string; className: string }
> = {
  new_customer: {
    label: 'New Customer',
    className: 'bg-[color-mix(in_srgb,var(--app-info)_15%,transparent)] text-[var(--app-info)]',
  },
  new_measurement: {
    label: 'New Measurement',
    className:
      'bg-[color-mix(in_srgb,var(--app-success)_15%,transparent)] text-[var(--app-success)]',
  },
};

interface BadgeProps {
  type: ActivityType;
}

const Badge = ({ type }: BadgeProps) => {
  const { label, className } = badgeConfig[type];

  return (
    <span
      className={clsx(
        'inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        className
      )}
    >
      {label}
    </span>
  );
};

export default Badge;
