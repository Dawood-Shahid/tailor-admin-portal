'use client';

import { ScissorsIcon, X } from 'lucide-react';
import NavLink from '@/components/layout/navLink';
import LogoutButton from '@/components/ui/logoutButton';

interface SidebarProps {
  onNavigate?: () => void;
  showCloseButton?: boolean;
  onClose?: () => void;
}

const Sidebar = ({ onNavigate, showCloseButton, onClose }: SidebarProps) => {
  return (
    <aside className='flex h-full flex-col background'>
      <div className='separator-bottom flex h-16 shrink-0 items-center gap-2.5 px-4'>
        <ScissorsIcon className='h-6 w-6 shrink-0 foreground-primary' />
        <h1 className='font-brand flex-1 text-lg font-semibold foreground-heading'>
          Tailor Portal
        </h1>
        {showCloseButton && onClose && (
          <button
            type='button'
            onClick={onClose}
            aria-label='Close navigation'
            className='flex h-8 w-8 items-center justify-center rounded-md foreground-text background-hover'
          >
            <X className='h-5 w-5' />
          </button>
        )}
      </div>

      <nav className='flex-1 overflow-y-auto px-2 py-3'>
        <NavLink onNavigate={onNavigate} />
      </nav>

      <div className='separator-top shrink-0 px-2 pb-3 pt-1'>
        <LogoutButton />
      </div>
    </aside>
  );
};

export default Sidebar;
