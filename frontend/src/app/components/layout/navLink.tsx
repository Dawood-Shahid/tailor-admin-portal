"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { inter } from "@/fonts";

import { HomeIcon, RulerIcon, UsersIcon } from "lucide-react";

const links = [
  {
    name: "Dashboard",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Customers",
    href: "/customers",
    icon: UsersIcon,
  },
  {
    name: "Categories",
    href: "/categories",
    icon: RulerIcon,
  },
];

const NavLink = () => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link, index) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;
        return (
          <div
            key={index}
            className="h-12 mx-2 relative rounded-md overflow-hidden"
          >
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "flex h-full grow items-center justify-start gap-3 text-sm font-medium px-4 transition-colors duration-200",
                inter.className,
                {
                  "primary-active-background-opacity primary-active-text":
                    isActive,
                  "hover:bg-[var(--app-background-hover)]": !isActive,
                  "text-secondary": !isActive,
                },
              )}
            >
              <LinkIcon
                className={clsx("w-5 h-5", {
                  "primary-active-text": isActive,
                })}
              />
              <p>{link.name}</p>
            </Link>
            <div
              className={clsx(
                "w-1 h-12 primary-active-background absolute top-0 right-0 rounded-l-sm",
                {
                  hidden: !isActive,
                },
              )}
            />
          </div>
        );
      })}
    </>
  );
};

export default NavLink;
