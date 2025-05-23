'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { itemsNavbar } from '@/data';
import MotionTransition from './transition-component';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      if (Math.abs(currentY - lastScrollY) > 10) {
        setScrollDirection(currentY > lastScrollY ? 'down' : 'up');
        lastScrollY = currentY;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollDirection;
};

const Navbar = () => {
  const pathname = usePathname();
  const scrollDirection = useScrollDirection();

  return (
    <MotionTransition
      position="right"
      className={`fixed bottom-6 z-40 w-full flex justify-center transition-transform duration-300 transform ${
        scrollDirection === 'down' ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      <nav>
        <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-white/15 backdrop-blur-sm">
          {itemsNavbar.map(({ id, icon, link, title }) => (
            <Link
              key={id}
              href={link}
              aria-label={title}
              className={`px-3 py-2 rounded-full transition duration-150 hover:bg-secondary ${
                pathname === link ? 'bg-secondary' : ''
              }`}
            >
              {icon}
            </Link>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;
