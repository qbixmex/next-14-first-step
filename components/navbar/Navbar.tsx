'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import navLink from './Navbar.styles';

const Navigation = () => {

  const pathname = usePathname();

  return (
    <nav className={navLink.container}>
      <Link
        href="/"
        className={navLink.link + (pathname === '/' && navLink.active)}
      >
        Home
      </Link>
      <section className="flex gap-4">
        <Link
          href="/about"
          className={navLink.link + (pathname === '/about' && navLink.active)}
        >About</Link>
        <Link
          href="/pricing"
          className={ navLink.link + (pathname === '/pricing' && navLink.active)}
        >Pricing</Link>
        <Link
          href="/contact"
          className={navLink.link + (pathname === '/contact' && navLink.active)}
        >Contact</Link>
      </section>
    </nav>
  );
};

export default Navigation;
