"use client"
import React, { useEffect } from 'react';
import { useThemeStore } from '@/src/store/themeStore';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <NextThemeProvider>
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
