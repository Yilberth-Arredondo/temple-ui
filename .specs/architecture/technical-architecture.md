# Arquitectura Técnica - Temple UI

## Stack Tecnológico

### Core
- **React**: 18.2+ (peer dependency)
- **TypeScript**: 5.3+ con strict mode
- **Tailwind CSS**: 3.4+ para estilos
- **Radix UI**: Componentes headless accesibles

### Build & Bundle
- **TSup**: Bundler principal
- **PostCSS**: Procesamiento de CSS
- **Autoprefixer**: Compatibilidad de navegadores

### Calidad de Código
- **ESLint**: Linting con reglas estrictas
- **Prettier**: Formateo consistente
- **Husky**: Git hooks para calidad
- **Commitlint**: Conventional commits

## Estructura de Directorios
```
temple-ui/
├── src/
│   ├── components/
│   │   ├── primitives/     # Shadcn sin modificar
│   │   ├── base/           # Shadcn personalizado
│   │   ├── composite/      # Componentes compuestos
│   │   ├── business/       # Lógica de negocio
│   │   └── layouts/        # Layouts
│   ├── hooks/              # Custom hooks
│   ├── lib/                # Utilidades
│   ├── styles/             # Estilos globales
│   ├── themes/             # Temas
│   └── types/              # TypeScript types
├── .specs/                 # Especificaciones
├── .claude/                # Contexto para IA
├── stories/                # Storybook
└── tests/                  # Tests
```

## Estrategia de Exportación

### Named Exports
```typescript
// Específicos por categoría
export * from './components/base'
export * from './components/composite'
export * from './hooks'
export * from './lib/utils'
```

### Path Exports
```json
{
  "exports": {
    ".": "./dist/index.js",
    "./styles": "./dist/styles.css",
    "./primitives": "./dist/primitives/index.js",
    "./base": "./dist/base/index.js",
    "./composite": "./dist/composite/index.js",
    "./business": "./dist/business/index.js"
  }
}
```

## Convenciones de Código

### Nomenclatura
- **Componentes**: PascalCase (`Button.tsx`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Types**: PascalCase con sufijo (`ButtonProps`)
- **Hooks**: camelCase con prefijo (`useTheme`)
- **Constantes**: UPPER_SNAKE_CASE

### Estructura de Componente
```typescript
// 1. Imports externos
import * as React from 'react'
import { cn } from '@/lib/utils'

// 2. Imports internos
import { baseStyles } from './styles'

// 3. Types/Interfaces
export interface ComponentProps {}

// 4. Component
export const Component = React.forwardRef<>()

// 5. Display name
Component.displayName = 'Component'
```

## Versionado
- Semantic Versioning (SemVer)
- Major: Breaking changes
- Minor: Nueva funcionalidad
- Patch: Bug fixes
- Pre-release: alpha/beta tags

## Performance Requirements
- Bundle size < 100kb gzipped (sin dependencias)
- Tree-shaking habilitado
- Code splitting por categoría
- CSS purge en producción
- Lazy loading para componentes pesados