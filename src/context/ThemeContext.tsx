'use client';
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

type Theme = 'default' | 'past' | 'future';

interface ThemeContextProps {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('default');
  const [animationState, setAnimationState] = useState<'idle' | 'out' | 'in'>(
    'idle'
  );
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

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
    if (animationState !== 'idle' || newTheme === theme) return;

    // Determine direction
    // Order: Past < Default < Future
    // Forward: Default->Future, Past->Default, Past->Future
    // Backward: Default->Past, Future->Default, Future->Past
    let newDirection: 'forward' | 'backward' = 'forward';

    if (theme === 'default') {
      if (newTheme === 'past') newDirection = 'backward'; // Past comes from left
      if (newTheme === 'future') newDirection = 'forward'; // Future comes from right
    } else if (theme === 'past') {
      newDirection = 'forward'; // Moving to Default or Future is moving "right"
    } else if (theme === 'future') {
      newDirection = 'backward'; // Moving to Default or Past is moving "left"
    }

    setDirection(newDirection);
    setAnimationState('out');

    // Wait for exit animation
    setTimeout(() => {
      setTheme(newTheme);
      setAnimationState('in');

      // Wait for enter animation
      setTimeout(() => {
        setAnimationState('idle');
      }, 500);
    }, 500);
  };

  const getAnimationClass = () => {
    if (animationState === 'idle') return '';

    if (direction === 'forward') {
      return animationState === 'out'
        ? 'carousel-forward-out'
        : 'carousel-forward-in';
    } else {
      return animationState === 'out'
        ? 'carousel-backward-out'
        : 'carousel-backward-in';
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
      <div
        className={`theme-transition-wrapper flex h-full w-full ${getAnimationClass()}`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};
