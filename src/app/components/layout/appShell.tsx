'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, ScissorsIcon, UserIcon } from 'lucide-react';
import Sidebar from '@/components/layout/sidebar';

interface AppShellProps {
  children: React.ReactNode;
}

const AppShell = ({ children }: AppShellProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <>
      <div className='hidden w-64 shrink-0 separator-right lg:block'>
        <Sidebar />
      </div>

      <div className='flex min-h-0 flex-1 flex-col overflow-hidden'>
        <header className='separator-bottom flex h-14 shrink-0 items-center justify-between gap-3 px-4 lg:hidden'>
          <div className='flex items-center gap-3'>
            <button
              type='button'
              onClick={() => setIsMenuOpen(true)}
              aria-label='Open navigation'
              aria-expanded={isMenuOpen}
              className='flex h-10 w-10 items-center justify-center rounded-md foreground-text background-hover'
            >
              <Menu className='h-5 w-5' />
            </button>
            <ScissorsIcon className='h-5 w-5 shrink-0 foreground-primary' />
            <h1 className='font-brand text-base font-semibold foreground-heading'>
              Tailor Portal
            </h1>
          </div>
          <div className='flex items-center gap-3'>
            <div className='flex flex-col'>
              <span className='text-sm font-medium'>John Doe</span>
              <span className='text-xs text-gray-500'>Organization Name</span>
            </div>
            <div className='flex items-center justify-center h-10 w-10 rounded-full primary-active-background-opacity'>
              <UserIcon className='h-5 w-5 foreground-primary' />
            </div>
          </div>
        </header>

        <header className='separator-bottom flex h-16 shrink-0 justify-end gap-3 px-4 hidden lg:flex'>
          <div className='flex items-center gap-3'>
            {/* // show user avatar and name org name */}
            <div className='flex flex-col'>
              <span className='text-sm font-medium'>John Doe</span>
              <span className='text-xs text-gray-500'>Organization Name</span>
            </div>
            <div className='flex items-center justify-center h-10 w-10 rounded-full primary-active-background-opacity'>
              <UserIcon className='h-5 w-5 foreground-primary' />
            </div>
          </div>
        </header>
        {children}
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden ${isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />

      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 separator-right background transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        aria-hidden={!isMenuOpen}
      >
        <Sidebar
          onNavigate={() => setIsMenuOpen(false)}
          showCloseButton
          onClose={() => setIsMenuOpen(false)}
        />
      </div>
    </>
  );
};

export default AppShell;
