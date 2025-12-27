#!/bin/bash

echo "🚀 Inicializando Temple UI..."

# Crear toda la estructura
mkdir -p src/components/{primitives,base,composite,business,layouts}
mkdir -p src/{hooks,lib,styles,themes,types}
mkdir -p stories
mkdir -p tests/components
mkdir -p docs/{decisions,guides}

# Crear archivos de configuración base
cat > package.json << 'EOF'
{
  "name": "@arrachis/temple-ui",
  "version": "0.1.0",
  "description": "Biblioteca de componentes compartida para Arrachis",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "files": [
    "dist",
    "README.md"
  ],
  "scripts": {
    "dev": "tsup --watch",
    "build": "tsup",
    "test": "vitest",
    "lint": "eslint . --ext .ts,.tsx",
    "format": "prettier --write .",
    "storybook": "storybook dev -p 6006",
    "build:storybook": "storybook build",
    "add:component": "npx shadcn@latest add",
    "prepublishOnly": "npm run build"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/tu-usuario/temple-ui.git"
  },
  "keywords": [
    "react",
    "components",
    "ui",
    "shadcn",
    "tailwind",
    "arrachis"
  ],
  "author": "Yilberth",
  "license": "MIT",
  "peerDependencies": {
    "react": ">=18.0.0",
    "react-dom": ">=18.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.3.0"
  }
}
EOF

# Crear tsconfig.json
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
EOF

# Crear README.md
cat > README.md << 'EOF'
# Temple UI

Biblioteca de componentes React basada en Shadcn/ui para las plataformas de Arrachis.

## Instalación
```bash
npm install @arrachis/temple-ui
```

## Uso
```tsx
import { Button, Card } from '@arrachis/temple-ui'
import '@arrachis/temple-ui/styles'

function App() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  )
}
```

## Desarrollo
```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build
npm run build

# Storybook
npm run storybook
```

## Licencia

MIT © Arrachis
EOF

echo "✅ Estructura creada"
echo ""
echo "📋 Próximos pasos:"
echo "1. cd temple-ui"
echo "2. npm install"
echo "3. npm install -D tailwindcss postcss autoprefixer tsup @storybook/react-vite"
echo "4. npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react"
echo "5. npx tailwindcss init -p"
echo "6. npx shadcn@latest init"
echo ""
echo "¡Temple UI está listo para desarrollo!"