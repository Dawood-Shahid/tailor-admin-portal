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
    name: 'Categories',
    href: '/categories',
    icon: RulerIcon,
  },
];

const NavLink = () => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link, index) => {
        const LinkIcon = link.icon;
        return (
          <div
            key={index}
            className='h-12 mx-2 relative rounded-md overflow-hidden'
          >
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex h-full grow items-center justify-start gap-2 text-sm font-medium primary-active-hover px-3',
                {
                  primaryActiveBackgroundOpacity: pathname === link.href,
                }
              )}
            >
              <LinkIcon
                className={clsx('w-6', {
                  primaryActiveText: pathname === link.href,
                })}
              />
              <p
                className={clsx({
                  primaryActiveText: pathname === link.href,
                })}
              >
                {link.name}
              </p>
            </Link>
            <div
              className={clsx(
                'w-2 h-12 primaryActiveBackground absolute top-0 right-0 z-1',
                {
                  hidden: pathname !== link.href,
                }
              )}
            />
          </div>
        );
      })}
    </>
  );
};

export default NavLink;
