'use client';
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

type Theme = 'default' | 'past' | 'future' | 'winter' | 'reeses';

interface ThemeContextProps {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('default');

  // Apply theme to document
  const applyTheme = (targetTheme: Theme) => {
    document.documentElement.setAttribute('data-theme', targetTheme);
  };

  // Always start with default theme on mount
  useEffect(() => {
    applyTheme('default');
    setTheme('default');
  }, []);

  // Update DOM when theme changes
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};
