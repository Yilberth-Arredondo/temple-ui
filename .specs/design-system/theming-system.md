# Sistema de Theming Multi-Tenant - Temple UI

## Concepto
Temple UI está diseñado para soportar múltiples marketplaces, cada uno con su propia identidad de marca. El sistema de theming permite cambiar completamente los colores y estilos sin modificar los componentes.

## Arquitectura de Temas

### 1. Tema Base (Abstracto)
Define las variables semánticas sin valores específicos de color:
- primary / primary-foreground
- secondary / secondary-foreground
- accent / accent-foreground
- background / foreground
- muted / muted-foreground
- card / card-foreground
- destructive / destructive-foreground
- warning / warning-foreground
- success / success-foreground

### 2. Temas de Marca
Cada marketplace define sus propios valores para estas variables.

## Marketplace: Arrachis

### Paleta de Colores
```css
/* Colores de Marca */
--brand-gold: #E3A30A;      /* Dorado - Principal */
--brand-brown: #6C3D24;     /* Café - Secundario */
--brand-cream: #E8DEB5;     /* Crema - Fondo/Accent */
--brand-dark: #0E1415;      /* Negro - Texto */

/* Variaciones */
--brand-gold-50: #FEF9E6;
--brand-gold-100: #FBF0C1;
--brand-gold-200: #F8E586;
--brand-gold-300: #F4D64A;
--brand-gold-400: #E3A30A;
--brand-gold-500: #C78908;
--brand-gold-600: #A67206;
--brand-gold-700: #855A05;
--brand-gold-800: #6B4804;
--brand-gold-900: #573A03;

--brand-brown-50: #F5F0ED;
--brand-brown-100: #E6D9D2;
--brand-brown-200: #CCAEA2;
--brand-brown-300: #B38A75;
--brand-brown-400: #8F5E44;
--brand-brown-500: #6C3D24;
--brand-brown-600: #5A3320;
--brand-brown-700: #48291A;
--brand-brown-800: #3A2115;
--brand-brown-900: #2E1A10;

--brand-cream-50: #FDFCF9;
--brand-cream-100: #FAF8F1;
--brand-cream-200: #F4EFDE;
--brand-cream-300: #E8DEB5;
--brand-cream-400: #DCCD8C;
--brand-cream-500: #D0BC63;
--brand-cream-600: #B59F4A;
--brand-cream-700: #94803B;
--brand-cream-800: #766630;
--brand-cream-900: #5E5127;
```

### Mapeo Semántico - Arrachis
```css
:root[data-theme="arrachis"] {
  /* Light Mode */
  --background: 0 0% 100%;              /* Blanco */
  --foreground: 198 7% 8%;              /* brand-dark */
  
  --primary: 43 93% 47%;                /* brand-gold */
  --primary-foreground: 0 0% 100%;      /* Blanco */
  
  --secondary: 22 48% 31%;              /* brand-brown */
  --secondary-foreground: 0 0% 100%;    /* Blanco */
  
  --accent: 40 53% 82%;                 /* brand-cream */
  --accent-foreground: 22 48% 31%;      /* brand-brown */
  
  --muted: 40 53% 95%;                  /* brand-cream-50 */
  --muted-foreground: 22 48% 25%;       /* brand-brown-700 */
  
  --card: 0 0% 100%;                    /* Blanco */
  --card-foreground: 198 7% 8%;         /* brand-dark */
  
  --border: 40 30% 90%;                 /* brand-cream-100 */
  --input: 40 30% 90%;                  /* brand-cream-100 */
  --ring: 43 93% 47%;                   /* brand-gold */
  
  --radius: 0.5rem;
}

[data-theme="arrachis"].dark {
  /* Dark Mode */
  --background: 198 7% 8%;              /* brand-dark */
  --foreground: 40 53% 95%;             /* brand-cream-50 */
  
  --primary: 43 93% 47%;                /* brand-gold */
  --primary-foreground: 198 7% 8%;      /* brand-dark */
  
  --secondary: 40 53% 82%;              /* brand-cream */
  --secondary-foreground: 22 48% 31%;   /* brand-brown */
  
  --accent: 22 48% 31%;                 /* brand-brown */
  --accent-foreground: 40 53% 82%;      /* brand-cream */
  
  --muted: 198 7% 15%;                  /* Ligeramente más claro que background */
  --muted-foreground: 40 30% 70%;       /* brand-cream más oscuro */
  
  --card: 198 7% 12%;                   /* Ligeramente más claro que background */
  --card-foreground: 40 53% 95%;        /* brand-cream-50 */
  
  --border: 198 7% 20%;                 /* Borde sutil */
  --input: 198 7% 20%;
  --ring: 43 93% 47%;                   /* brand-gold */
}
```

## Otros Marketplaces (Ejemplos)

### Marketplace Tech
```css
:root[data-theme="tech"] {
  --primary: 217 91% 60%;         /* Azul eléctrico */
  --secondary: 271 91% 65%;       /* Púrpura */
  --accent: 174 62% 47%;          /* Cyan */
  /* ... */
}
```

### Marketplace Fashion
```css
:root[data-theme="fashion"] {
  --primary: 330 81% 60%;         /* Rosa */
  --secondary: 0 0% 13%;          /* Negro */
  --accent: 39 100% 68%;          /* Dorado */
  /* ... */
}
```

## Implementación en Componentes

### Nunca usar colores directos
```tsx
// ❌ INCORRECTO
<div className="bg-[#E3A30A]">

// ✅ CORRECTO
<div className="bg-primary">
```

### Uso de variantes semánticas
```tsx
// Los componentes usan variantes semánticas
<Button variant="primary">Comprar</Button>
<Card className="bg-card text-card-foreground">
```

## Sistema de Aplicación de Temas

### 1. Provider de Tema
```tsx
<ThemeProvider theme="arrachis" defaultMode="light">
  <App />
</ThemeProvider>
```

### 2. CSS Variables en Tailwind
```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      border: "hsl(var(--border))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      // ... resto de colores semánticos
    }
  }
}
```

### 3. Clase de tema en HTML
```html
<html data-theme="arrachis" class="light">
  <!-- contenido -->
</html>
```