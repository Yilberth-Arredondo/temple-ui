# Arquitectura de Theming Multi-Tenant

## Estructura de Archivos
```
src/
├── themes/
│   ├── base/
│   │   ├── colors.css        # Variables de color base
│   │   ├── typography.css    # Sistema tipográfico
│   │   └── spacing.css       # Sistema de espaciado
│   ├── brands/
│   │   ├── arrachis.css      # Tema Arrachis
│   │   ├── tech.css          # Tema Tech Marketplace
│   │   └── fashion.css       # Tema Fashion Marketplace
│   ├── themes.ts             # Registro de temas
│   └── index.ts              # Exportaciones
├── providers/
│   └── theme-provider.tsx    # React Context para temas
└── hooks/
    └── use-theme.ts          # Hook para cambiar temas
```

## Implementación del Provider
```typescript
// src/providers/theme-provider.tsx
interface ThemeProviderProps {
  children: React.ReactNode
  theme: 'arrachis' | 'tech' | 'fashion' | string
  defaultMode?: 'light' | 'dark' | 'system'
  enableSystem?: boolean
  storageKey?: string
}

export function ThemeProvider({
  children,
  theme = 'arrachis',
  defaultMode = 'light',
  enableSystem = true,
  storageKey = 'temple-ui-theme'
}: ThemeProviderProps) {
  // Aplicar tema al data-attribute
  // Gestionar light/dark mode
  // Persistir preferencias
}
```

## Registro de Temas
```typescript
// src/themes/themes.ts
export interface Theme {
  name: string
  displayName: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
  }
  font?: {
    sans?: string
    mono?: string
  }
  radius?: string
}

export const themes: Record<string, Theme> = {
  arrachis: {
    name: 'arrachis',
    displayName: 'Arrachis',
    colors: {
      primary: '#E3A30A',
      secondary: '#6C3D24',
      accent: '#E8DEB5',
      background: '#0E1415'
    }
  },
  // Más temas...
}
```

## Uso en Aplicaciones

### Instalación
```bash
npm install @arrachis/temple-ui
```

### Setup Básico
```tsx
// main.tsx o App.tsx
import { ThemeProvider } from '@arrachis/temple-ui'
import '@arrachis/temple-ui/themes/arrachis.css' // Tema específico

function App() {
  return (
    <ThemeProvider theme="arrachis" defaultMode="light">
      {/* Tu aplicación */}
    </ThemeProvider>
  )
}
```

### Setup Dinámico
```tsx
// Para marketplaces con múltiples temas
import { ThemeProvider, useTheme } from '@arrachis/temple-ui'

function MarketplaceApp() {
  const [currentTheme, setCurrentTheme] = useState('arrachis')
  
  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeSwitcher onThemeChange={setCurrentTheme} />
      {/* Contenido */}
    </ThemeProvider>
  )
}
```

## Build Strategy

### Opción 1: Todos los temas incluidos
```javascript
// tsup.config.ts
entry: {
  'index': 'src/index.ts',
  'themes/all': 'src/themes/index.ts',
}
```

### Opción 2: Temas separados (recomendado)
```javascript
// tsup.config.ts
entry: {
  'index': 'src/index.ts',
  'themes/arrachis': 'src/themes/brands/arrachis.css',
  'themes/tech': 'src/themes/brands/tech.css',
  // Un entry por tema
}
```

Esto permite:
```tsx
// Solo importar el tema necesario
import '@arrachis/temple-ui/themes/arrachis'
// No carga los otros temas = menor bundle
```