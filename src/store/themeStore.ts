import { create } from 'zustand';
import { ThemeState } from '@/src/types/stores';

export const useThemeStore = create<ThemeState>((set) => {
  const storedTheme = (typeof window !== 'undefined' && localStorage.getItem('theme')) as 'light' | 'dark';

  return {
    theme: storedTheme || 'light',
    toggleTheme: () =>
      set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        return { theme: newTheme };
      }),
    setTheme: (theme: 'light' | 'dark') => {
      localStorage.setItem('theme', theme);
      set({ theme });
    },
  };
});
