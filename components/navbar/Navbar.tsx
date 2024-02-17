// import { HomeIcon } from '@primer/octicons-react';

import Link from 'next/link';
import { MenuLink } from '@/components';
import styles from '../navbar/Navbar.module.css';
import { HomeIcon } from '@primer/octicons-react';

const navLinks = [
  { id: 'a', path: '/about', label: 'About' },
  { id: 'b', path: '/pricing', label: 'Pricing' },
  { id: 'c', path: '/contact', label: 'Contact' },
];

const Navigation = () => {

  return (
    <nav className={styles.container}>
      <MenuLink path="/" label="Home">
        <HomeIcon />
      </MenuLink>
      <section className="flex gap-2">
        {navLinks.map(link => (
          <MenuLink key={link.id} path={link.path} label={link.label} />
        ))}
      </section>
    </nav>
  );
};

export default Navigation;
