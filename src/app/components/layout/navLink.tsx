'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { HomeIcon, RulerIcon, UsersIcon } from 'lucide-react';

const links = [
  {
    name: 'Dashboard',
    href: '/',
    icon: HomeIcon,
  },
  {
    name: 'Customers',
    href: '/customers',
    icon: UsersIcon,
  },
  {
    name: 'Measurement Categories',
    href: '/measurements',
    icon: RulerIcon,
  },
];

interface NavLinkProps {
  onNavigate?: () => void;
}

const NavLink = ({ onNavigate }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <div className='space-y-0.5'>
      {links.map((link, index) => {
        const LinkIcon = link.icon;
        return (
          <div key={index} className='relative'>
            <Link
              href={link.href}
              onClick={() => onNavigate?.()}
              className={clsx(
                'flex h-11 items-center gap-3 rounded-md px-3 text-sm font-medium foreground-text transition-colors primary-active-hover',
                {
                  'primary-active-background-opacity primary-active-text':
                    pathname === link.href,
                  'background-hover': pathname !== link.href,
                }
              )}
            >
              <LinkIcon className='h-5 w-5 shrink-0' />
              <span>{link.name}</span>
            </Link>
            <div
              className={clsx(
                'primary-active-background absolute right-0 top-1/2 h-full w-1 -translate-y-1/2 rounded-r-md',
                {
                  hidden: pathname !== link.href,
                }
              )}
            />
          </div>
        );
      })}
    </div>
  );
};

export default NavLink;
