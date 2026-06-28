import React from 'react';
import { ScissorsIcon } from 'lucide-react';
import NavLink from '@/components/layout/navLink';
import LogoutButton from '@/components/ui/logoutButton';

const Sidebar = () => {
  return (
    <aside className='flex h-full flex-col background'>
      <div className='separator-bottom flex h-16 shrink-0 items-center gap-2.5 px-4'>
        <ScissorsIcon className='h-6 w-6 shrink-0 foreground-primary' />
        <h1 className='font-brand text-lg font-semibold foreground-heading'>
          Tailor Portal
        </h1>
      </div>

      <nav className='flex-1 overflow-y-auto px-2 py-3'>
        <NavLink />
      </nav>

      <div className='separator-top shrink-0 px-2 pb-3 pt-1'>
        <LogoutButton />
      </div>
    </aside>
  );
};

export default Sidebar;
