import React from 'react';
import { ScissorsIcon } from 'lucide-react';
import { lusitana } from '@/fonts';
import NavLink from '@/components/layout/navLink';
import LogoutButton from '@/components/ui/logoutButton';

const Sidebar = () => {
  return (
    <div className='h-screen background flex flex-col'>
      {/* Header Container */}
      <div className='separator-bottom h-20 mb-4 flex-shrink-0'>
        <div className='h-full flex flex-row background items-end justify-center pb-2'>
          <ScissorsIcon className='h-6 w-6 foreground-primary mr-2' />
          <h1 className={`text-xl font-bold ${lusitana.className}`}>
            Tailor Portal
          </h1>
        </div>
      </div>
      {/* NavLink container */}
      <div className='flex-1 space-y-1'>
        <NavLink />
      </div>
      {/* Footer Container */}
      <div className='flex-shrink-0'>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;
