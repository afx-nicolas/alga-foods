import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';
import { useScreenSize } from '../hooks';

interface MobileMenuContextProps {
  isMenuOpen: boolean;
  switchMenuOpen: () => void;
}

interface MobileMenuProviderProps {
  children: React.ReactNode;
}

export const MobileMenuContext = createContext({} as MobileMenuContextProps);

export default function MobileMenuProvider({
  children,
}: MobileMenuProviderProps) {
  const router = useRouter();
  const [width] = useScreenSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    if (width > 480 || !width) {
      setIsMenuOpen(false);
    }
  }, [width]);

  const switchMenuOpen = () => setIsMenuOpen((state) => !state);

  return (
    <MobileMenuContext.Provider value={{ isMenuOpen, switchMenuOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
}
