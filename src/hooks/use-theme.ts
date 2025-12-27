// Especificación del hook useTheme

interface UseThemeReturn {
  // Tema actual
  theme: string;
  setTheme: (theme: string) => void;

  // Modo (light/dark)
  mode: 'light' | 'dark' | 'system';
  setMode: (mode: 'light' | 'dark' | 'system') => void;

  // Utilidades
  themes: string[]; // Lista de temas disponibles
  systemMode: 'light' | 'dark'; // Modo del sistema
  resolvedMode: 'light' | 'dark'; // Modo final aplicado

  // Colores del tema actual
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
  };
}

// Uso
function MyComponent() {
  const { theme, setTheme, mode, setMode, colors } = useTheme();

  return (
    <div>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}>
        <option value='arrachis'>Arrachis</option>
        <option value='tech'>Tech</option>
        <option value='fashion'>Fashion</option>
      </select>

      <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
        Toggle {mode} mode
      </button>

      <div style={{ backgroundColor: colors.primary }}>
        Usando color primario del tema {theme}
      </div>
    </div>
  );
}
