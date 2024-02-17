'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import navLink from './Navbar.styles';
import { HomeIcon } from '@primer/octicons-react';

const navLinks = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
];

const Navigation = () => {

  const pathname = usePathname();

  return (
    <nav className={navLink.container}>
      <Link
        href="/"
        className={navLink.link + (pathname === '/' && navLink.active)}
      >
        <HomeIcon /> Home
      </Link>
      <section className="flex gap-4">
        {navLinks.map(({ path, text }) => (
          <Link
            key={path}
            href={path}
            className={navLink.link + (pathname === path && navLink.active)}
          >{text}</Link>
        ))}
      </section>
    </nav>
  );
};

export default Navigation;
