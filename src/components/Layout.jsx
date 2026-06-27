import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main style={{ paddingTop: pathname === '/' ? 0 : 'var(--header-height)' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
