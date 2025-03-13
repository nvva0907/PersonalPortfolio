
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../lib/theme-provider';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeSwitcher;
