import { useEffect, useState } from 'react';

export interface UseThemeReturn {
  theme: string;
  setTheme: (theme: string) => void;
  mode: 'light' | 'dark' | 'system';
  setMode: (mode: 'light' | 'dark' | 'system') => void;
  themes: string[];
  systemMode: 'light' | 'dark';
  resolvedMode: 'light' | 'dark';
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
  };
}

const THEMES = ['arrachis', 'reconocete'];
const STORAGE_KEYS = {
  THEME: 'temple-ui-theme',
  MODE: 'temple-ui-mode',
};

function getSystemMode(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getStoredValue(key: string, defaultValue: string): string {
  if (typeof window === 'undefined') return defaultValue;
  return localStorage.getItem(key) ?? defaultValue;
}

function setStoredValue(key: string, value: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, value);
}

export function useTheme(): UseThemeReturn {
  const [theme, setThemeState] = useState(() => getStoredValue(STORAGE_KEYS.THEME, 'arrachis'));
  const [mode, setModeState] = useState<'light' | 'dark' | 'system'>(() => 
    getStoredValue(STORAGE_KEYS.MODE, 'system') as 'light' | 'dark' | 'system'
  );
  const [systemMode, setSystemMode] = useState<'light' | 'dark'>(() => getSystemMode());

  const resolvedMode = mode === 'system' ? systemMode : mode;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setSystemMode(getSystemMode());
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.classList.toggle('dark', resolvedMode === 'dark');
  }, [theme, resolvedMode]);

  const setTheme = (newTheme: string) => {
    setThemeState(newTheme);
    setStoredValue(STORAGE_KEYS.THEME, newTheme);
  };

  const setMode = (newMode: 'light' | 'dark' | 'system') => {
    setModeState(newMode);
    setStoredValue(STORAGE_KEYS.MODE, newMode);
  };

  const colors = {
    primary: 'hsl(var(--primary))',
    secondary: 'hsl(var(--secondary))',
    accent: 'hsl(var(--accent))',
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',
  };

  return {
    theme,
    setTheme,
    mode,
    setMode,
    themes: THEMES,
    systemMode,
    resolvedMode,
    colors,
  };
}