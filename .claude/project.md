# Temple UI - Context for Claude Code

## Project Overview
Temple UI is a React component library built on top of Shadcn/ui, designed to be shared across multiple web platforms for Arrachis (Colombian food company).

## Current State
- **Phase**: Initial setup and specification
- **Status**: Defining architecture and component specs
- **Next Steps**: Implementation of core components

## Architecture Decisions

### Why Multi-Repo?
- Independent versioning per platform
- Separate CI/CD pipelines
- Team autonomy
- Clear ownership boundaries

### Why Shadcn/ui?
- Copy-paste architecture allows customization
- Built on Radix UI (accessible)
- Tailwind CSS for styling
- TypeScript first
- Small bundle size

### Why TSup?
- Optimized for library bundling
- Tree-shaking support
- Multiple format outputs (ESM, CJS)
- Fast build times

## Code Guidelines

### Component Creation Process
1. Write spec in `.specs/components/[name].spec.md`
2. Create component in `src/components/[category]/[name].tsx`
3. Add story in `stories/[name].stories.tsx`
4. Write tests in `tests/components/[name].test.tsx`
5. Export from appropriate index file
6. Update documentation

### TypeScript Conventions
- Strict mode enabled
- Explicit return types for functions
- Interface over type for component props
- Proper generic constraints

### Styling Approach
- Tailwind utilities first
- CVA for variants
- CSS variables for theming
- No inline styles
- cn() utility for class merging

### Testing Strategy
- Unit tests for logic
- Component testing for interactions
- Visual regression with Storybook
- Accessibility testing with jest-axe

## Common Patterns

### Forwarding Refs
```typescript
const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("base-classes", className)} {...props} />
  }
)
Component.displayName = 'Component'
```

### Compound Components
```typescript
const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
})
```

### Polymorphic Components
```typescript
<Button asChild>
  <Link href="/home">Home</Link>
</Button>
```

## Import Aliases
- `@/components/*` → `src/components/*`
- `@/lib/*` → `src/lib/*`
- `@/hooks/*` → `src/hooks/*`
- `@/types/*` → `src/types/*`

## Available Scripts
- `dev`: Development mode with watch
- `build`: Production build
- `test`: Run tests
- `lint`: ESLint checking
- `format`: Prettier formatting
- `storybook`: Start Storybook
- `add:component`: Add Shadcn component

## Dependencies to Install
- React (peer)
- Tailwind CSS
- Radix UI primitives
- class-variance-authority
- tailwind-merge
- clsx
- lucide-react (icons)

## File Structure Pattern
```
component-name/
├── index.tsx         # Main component
├── types.ts         # TypeScript types
├── styles.ts        # Style variants (CVA)
├── utils.ts         # Helper functions
└── hooks.ts         # Component-specific hooks
```

## Performance Targets
- Bundle size: < 100kb gzipped
- Tree-shaking: Full support
- Initial load: < 50ms
- Re-renders: Optimized with memo

## Browser Support
- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- Mobile: iOS 12+, Android 8+