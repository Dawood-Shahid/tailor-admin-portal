import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';

interface QuickActionCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

const QuickActionCard = ({
  title,
  description,
  href,
  icon: Icon,
}: QuickActionCardProps) => {
  return (
    <Link
      href={href}
      className='background group flex items-start gap-4 rounded-lg border border-[var(--app-border)] p-5 transition-colors hover:bg-[var(--app-background-hover)]'
    >
      <div className='primary-active-background-opacity flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors group-hover:bg-[var(--app-primary-with-opacity)]'>
        <Icon className='h-6 w-6 foreground-primary' />
      </div>
      <div>
        <p className='font-medium foreground-heading'>{title}</p>
        <p className='mt-0.5 text-sm text-[var(--app-text-secondary)]'>
          {description}
        </p>
      </div>
    </Link>
  );
};

export default QuickActionCard;
