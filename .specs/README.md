# Temple UI - Especificaciones del Sistema

## Visión General
Temple UI es una biblioteca de componentes React reutilizable basada en Shadcn/ui, diseñada para ser compartida entre múltiples plataformas web de Arrachis.

## Objetivos
1. **Reutilización**: Componentes compartidos entre 3+ plataformas
2. **Consistencia**: Mismo look & feel en todas las aplicaciones
3. **Mantenibilidad**: Un solo lugar para actualizar componentes
4. **Performance**: Bundle size optimizado, tree-shaking habilitado
5. **DX**: Excelente experiencia de desarrollo con TypeScript y documentación

## Arquitectura
- **Base**: Shadcn/ui + Radix UI
- **Estilos**: Tailwind CSS con tema personalizable
- **Build**: TSup para bundling optimizado
- **Tipos**: TypeScript con definiciones exportadas
- **Docs**: Storybook para documentación visual
- **Testing**: Vitest + Testing Library

## Estructura de Componentes

### Niveles de Componentes
1. **Primitivos** (`/primitives`): Componentes Shadcn sin modificar
2. **Base** (`/base`): Componentes Shadcn personalizados
3. **Composite** (`/composite`): Combinaciones de componentes base
4. **Business** (`/business`): Componentes específicos de negocio
5. **Layouts** (`/layouts`): Estructuras de página reutilizables

## Tecnologías
- React 18+
- TypeScript 5.3+
- Tailwind CSS 3.4+
- Radix UI
- Class Variance Authority (CVA)
- Tailwind Merge

## Consumidores
- Platform 1: Dashboard de gestión
- Platform 2: E-commerce
- Platform 3: Portal de clientes