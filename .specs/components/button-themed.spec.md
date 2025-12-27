# Button Component - Multi-Theme Specification

## Variantes con Theming

### Brand Variant (Nueva)
Una variante especial que usa los colores primarios del tema actual:
```typescript
interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'brand'
  // ... resto de props
}
```

### Implementación de Variantes
```typescript
const buttonVariants = cva(
  "base-classes...",
  {
    variants: {
      variant: {
        // Usa colores semánticos que cambian con el tema
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        brand: "bg-gradient-to-r from-primary to-secondary text-white shadow-lg",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
  }
)
```

## Ejemplos por Marketplace

### Arrachis
```tsx
// Los colores se adaptan automáticamente al tema
<Button variant="brand">
  Comprar Ahora {/* Dorado → Café gradient */}
</Button>

<Button variant="secondary">
  Ver Catálogo {/* Café de fondo */}
</Button>
```

### Tech Marketplace
```tsx
// Mismos componentes, diferentes colores
<Button variant="brand">
  Comenzar Prueba {/* Azul → Púrpura gradient */}
</Button>
```

## Estados especiales por tema

### Loading con color del tema
```tsx
// El spinner toma el color del tema actual
<Button loading variant="brand">
  <Loader className="animate-spin text-current" />
  Procesando...
</Button>
```

### Focus ring del tema
```css
/* El focus ring usa el color primario del tema */
.button:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
  ring: 2px solid var(--ring);
}
```