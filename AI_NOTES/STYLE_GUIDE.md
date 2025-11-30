# Theme/Brand Style Guide

This document outlines the design system, color palette, typography, spacing, and component patterns used throughout the project. It serves as a reference for maintaining visual consistency and implementing new features.

## Table of Contents

1. [Color System](#color-system)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Component Patterns](#component-patterns)
5. [shadcn/ui Integration](#shadcnui-integration)
6. [Tailwind CSS Usage](#tailwind-css-usage)
7. [Design Tokens](#design-tokens)
8. [Usage Guidelines](#usage-guidelines)

---

## Color System

### Color Format: OKLCH

This project uses the OKLCH color space for all color definitions. OKLCH provides better perceptual uniformity and more predictable color mixing compared to RGB or HSL.

**Why OKLCH?**
- Better color consistency across different displays
- More intuitive color manipulation
- Improved accessibility when adjusting lightness
- Better support for wide-gamut displays

### Light Mode Color Palette

All colors are defined as CSS custom properties in `src/styles/globals.css`:

#### Core Colors

- **Background**: `oklch(1 0 0)` - Pure white
- **Foreground**: `oklch(0.141 0.005 285.823)` - Near-black text

#### Primary Colors

- **Primary**: `oklch(0.21 0.006 285.885)` - Dark primary color
- **Primary Foreground**: `oklch(0.985 0 0)` - Light text on primary

#### Secondary Colors

- **Secondary**: `oklch(0.967 0.001 286.375)` - Light gray
- **Secondary Foreground**: `oklch(0.21 0.006 285.885)` - Dark text on secondary

#### Muted Colors

- **Muted**: `oklch(0.967 0.001 286.375)` - Subtle background
- **Muted Foreground**: `oklch(0.552 0.016 285.938)` - Medium gray text

#### Accent Colors

- **Accent**: `oklch(0.967 0.001 286.375)` - Highlight color
- **Accent Foreground**: `oklch(0.21 0.006 285.885)` - Text on accent

#### Destructive Colors

- **Destructive**: `oklch(0.577 0.245 27.325)` - Error/delete actions
- Used for error states, delete buttons, and destructive actions

#### Interactive Elements

- **Border**: `oklch(0.92 0.004 286.32)` - Light border color
- **Input**: `oklch(0.92 0.004 286.32)` - Input field background
- **Ring**: `oklch(0.705 0.015 286.067)` - Focus ring color

#### Chart Colors

Five distinct colors for data visualization:

- **Chart 1**: `oklch(0.646 0.222 41.116)` - Orange/yellow
- **Chart 2**: `oklch(0.6 0.118 184.704)` - Cyan/blue
- **Chart 3**: `oklch(0.398 0.07 227.392)` - Blue
- **Chart 4**: `oklch(0.828 0.189 84.429)` - Yellow/green
- **Chart 5**: `oklch(0.769 0.188 70.08)` - Yellow

#### Sidebar Colors

- **Sidebar**: `oklch(0.985 0 0)` - Sidebar background
- **Sidebar Foreground**: `oklch(0.141 0.005 285.823)` - Sidebar text
- **Sidebar Primary**: `oklch(0.21 0.006 285.885)` - Sidebar primary
- **Sidebar Accent**: `oklch(0.967 0.001 286.375)` - Sidebar accent
- **Sidebar Border**: `oklch(0.92 0.004 286.32)` - Sidebar borders
- **Sidebar Ring**: `oklch(0.705 0.015 286.067)` - Sidebar focus ring

### Dark Mode Color Palette

Dark mode colors are defined in the `.dark` class selector:

#### Core Colors

- **Background**: `oklch(0.141 0.005 285.823)` - Dark background
- **Foreground**: `oklch(0.985 0 0)` - Light text

#### Primary Colors

- **Primary**: `oklch(0.92 0.004 286.32)` - Light primary (inverted)
- **Primary Foreground**: `oklch(0.21 0.006 285.885)` - Dark text on primary

#### Secondary Colors

- **Secondary**: `oklch(0.274 0.006 286.033)` - Dark gray
- **Secondary Foreground**: `oklch(0.985 0 0)` - Light text

#### Muted Colors

- **Muted**: `oklch(0.274 0.006 286.033)` - Dark muted background
- **Muted Foreground**: `oklch(0.705 0.015 286.067)` - Medium light text

#### Accent Colors

- **Accent**: `oklch(0.274 0.006 286.033)` - Dark accent
- **Accent Foreground**: `oklch(0.985 0 0)` - Light text

#### Destructive Colors

- **Destructive**: `oklch(0.704 0.191 22.216)` - Lighter red for dark mode

#### Interactive Elements

- **Border**: `oklch(1 0 0 / 10%)` - Subtle white border with opacity
- **Input**: `oklch(1 0 0 / 15%)` - Input background with opacity
- **Ring**: `oklch(0.552 0.016 285.938)` - Focus ring for dark mode

#### Chart Colors (Dark Mode)

- **Chart 1**: `oklch(0.488 0.243 264.376)` - Purple
- **Chart 2**: `oklch(0.696 0.17 162.48)` - Cyan
- **Chart 3**: `oklch(0.769 0.188 70.08)` - Yellow
- **Chart 4**: `oklch(0.627 0.265 303.9)` - Pink
- **Chart 5**: `oklch(0.645 0.246 16.439)` - Orange

### Using Semantic Colors

Always use semantic color tokens instead of direct color values:

```tsx
// ✅ Good - Uses semantic tokens
<div className="bg-background text-foreground">
  <button className="bg-primary text-primary-foreground">
    Click me
  </button>
</div>

// ❌ Bad - Uses direct colors
<div className="bg-white text-black">
  <button className="bg-blue-500 text-white">
    Click me
  </button>
</div>
```

### Color Accessibility

- Ensure sufficient contrast ratios (WCAG AA minimum)
- Test colors in both light and dark modes
- Use semantic colors that automatically adapt to theme
- Destructive actions should use the `destructive` color token

---

## Typography

### Primary Font: Geist Sans

The project uses **Geist Sans** from Google Fonts as the primary typeface.

**Font Stack:**
```css
--font-sans: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
```

**Configuration:**
- Loaded via Next.js font optimization
- Variable font for better performance
- Includes emoji fallbacks for cross-platform compatibility

### Font Loading

Fonts are loaded in `src/app/layout.tsx`:

```tsx
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});
```

### Typography Scale

Use Tailwind's typography utilities:

- `text-xs` - Extra small (0.75rem)
- `text-sm` - Small (0.875rem)
- `text-base` - Base (1rem)
- `text-lg` - Large (1.125rem)
- `text-xl` - Extra large (1.25rem)
- `text-2xl` - 2x large (1.5rem)
- `text-3xl` - 3x large (1.875rem)
- `text-4xl` - 4x large (2.25rem)
- `text-5xl` - 5x large (3rem)
- `text-6xl` - 6x large (3.75rem)
- `text-7xl` - 7x large (4.5rem)

### Font Weights

- `font-normal` - 400
- `font-medium` - 500
- `font-semibold` - 600
- `font-bold` - 700

### Usage Guidelines

- Use `text-balance` for headings to prevent awkward line breaks
- Prefer semantic HTML elements (`h1`, `h2`, `p`, etc.) over styled divs
- Maintain consistent font sizes across similar UI elements
- Use `font-medium` or `font-semibold` for emphasis, not multiple font sizes

---

## Spacing & Layout

### Border Radius System

The project uses a consistent border radius system based on a base value:

**Base Radius:** `0.625rem` (10px)

**Radius Scale:**
- `--radius-sm`: `calc(var(--radius) - 4px)` = 6px
- `--radius-md`: `calc(var(--radius) - 2px)` = 8px
- `--radius-lg`: `var(--radius)` = 10px
- `--radius-xl`: `calc(var(--radius) + 4px)` = 14px

**Tailwind Classes:**
- `rounded-sm` - Small radius
- `rounded-md` - Medium radius
- `rounded-lg` - Large radius
- `rounded-xl` - Extra large radius
- `rounded-full` - Fully rounded (for pills/circles)

### Spacing Scale

Use Tailwind's spacing scale (based on 4px increments):

- `0` - 0px
- `1` - 4px (0.25rem)
- `2` - 8px (0.5rem)
- `3` - 12px (0.75rem)
- `4` - 16px (1rem)
- `6` - 24px (1.5rem)
- `8` - 32px (2rem)
- `12` - 48px (3rem)
- `16` - 64px (4rem)
- `24` - 96px (6rem)

### Layout Patterns

**Container:**
```tsx
<div className="mx-auto max-w-7xl px-6">
  {/* Content */}
</div>
```

**Grid Layouts:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Grid items */}
</div>
```

**Flexbox:**
```tsx
<div className="flex items-center justify-between gap-4">
  {/* Flex items */}
</div>
```

---

## Component Patterns

### Button Component

The Button component demonstrates the component pattern used throughout the project.

#### Variants

1. **Default** (`default`)
   - Primary action button
   - Uses `bg-primary text-primary-foreground`

2. **Destructive** (`destructive`)
   - For delete/remove actions
   - Uses `bg-destructive` with appropriate hover states

3. **Outline** (`outline`)
   - Secondary actions with border
   - Uses `border bg-background`

4. **Secondary** (`secondary`)
   - Alternative to primary
   - Uses `bg-secondary text-secondary-foreground`

5. **Ghost** (`ghost`)
   - Minimal styling, hover only
   - Uses `hover:bg-accent`

6. **Link** (`link`)
   - Text link style
   - Uses `text-primary underline`

#### Sizes

- `sm` - Small (h-8)
- `default` - Default (h-9)
- `lg` - Large (h-10)
- `icon` - Icon button (size-9)
- `icon-sm` - Small icon (size-8)
- `icon-lg` - Large icon (size-10)

#### Usage Example

```tsx
import { Button } from "@/components/ui/button";

// Primary action
<Button variant="default" size="lg">
  Submit
</Button>

// Destructive action
<Button variant="destructive">
  Delete
</Button>

// With icon
<Button variant="outline" size="icon">
  <ArrowRight className="size-4" />
</Button>
```

### Focus States

All interactive elements include focus states:

- **Focus Ring**: 3px ring with `ring-ring/50` opacity
- **Focus Visible**: Only shows on keyboard navigation
- **Accessibility**: Ensures keyboard users can see focus

```tsx
// Focus states are built into components
<Button className="focus-visible:ring-[3px] focus-visible:ring-ring/50">
  Button
</Button>
```

### Component Composition with CVA

Components use **Class Variance Authority (CVA)** for variant management:

```tsx
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "base-classes", // Base styles applied to all variants
  {
    variants: {
      variant: {
        default: "variant-specific-classes",
        destructive: "other-classes",
      },
      size: {
        sm: "size-classes",
        lg: "other-size-classes",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

**Benefits:**
- Type-safe variants
- Composable and maintainable
- Works seamlessly with Tailwind
- Easy to extend

---

## shadcn/ui Integration

### Overview

This project uses **shadcn/ui**, a collection of re-usable components built with Radix UI and Tailwind CSS. Components are copied into your project, not installed as dependencies.

### Style Variant: New York

The project uses the **New York** style variant, as configured in `components.json`:

```json
{
  "style": "new-york",
  "rsc": true,
  "tsx": true
}
```

**New York Style Characteristics:**
- Cleaner, more minimal aesthetic
- Subtle shadows and borders
- Refined spacing
- Modern design language

### Component Structure

Components are located in `src/components/ui/`:

```
src/components/ui/
  ├── button.tsx
  ├── animated-group.tsx
  ├── text-effect.tsx
  └── sonner.tsx
```

### Component Installation

To add a new shadcn/ui component:

```bash
npx shadcn@latest add [component-name]
```

This will:
1. Copy the component file to `src/components/ui/`
2. Add any required dependencies
3. Update `components.json` if needed

### Customization

Since components are copied into your project, you can freely customize them:

```tsx
// src/components/ui/button.tsx
const buttonVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        // Add your custom variant
        custom: "bg-custom-color text-custom-foreground",
      },
    },
  }
);
```

### Radix UI Primitives

shadcn/ui components are built on **Radix UI** primitives:

- **Accessible by default** - ARIA attributes included
- **Unstyled** - Full control over styling
- **Composable** - Build complex components from primitives
- **Keyboard navigation** - Built-in keyboard support

**Example: Slot Component**

```tsx
import { Slot } from "@radix-ui/react-slot";

// Allows component to render as different element
<Button asChild>
  <Link href="/">Home</Link>
</Button>
```

### Best Practices

1. **Don't modify shadcn components directly** - Instead, extend them
2. **Use composition** - Combine multiple components
3. **Leverage Radix primitives** - For complex interactions
4. **Maintain accessibility** - Keep ARIA attributes intact
5. **Follow the pattern** - Use CVA for variants

### Component Composition Example

```tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Extend existing component
export function CustomButton({ className, ...props }) {
  return (
    <Button
      className={cn("custom-additional-styles", className)}
      {...props}
    />
  );
}
```

---

## Tailwind CSS Usage

### Configuration

This project uses **Tailwind CSS v4** with PostCSS:

**PostCSS Config** (`postcss.config.js`):
```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

**CSS Import** (`src/styles/globals.css`):
```css
@import "tailwindcss";
@import "tw-animate-css";
```

### Utility-First Philosophy

Tailwind uses a utility-first approach where you build designs using utility classes:

```tsx
// ✅ Utility-first approach
<div className="flex items-center justify-between gap-4 p-6 bg-background rounded-lg">
  <h2 className="text-xl font-semibold">Title</h2>
  <button className="px-4 py-2 bg-primary text-primary-foreground rounded">
    Action
  </button>
</div>
```

### Custom Theme Integration

Tailwind integrates with CSS custom properties through the `@theme` directive:

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  /* ... more colors ... */
}
```

This allows using semantic color tokens in Tailwind classes:

```tsx
<div className="bg-background text-foreground">
  {/* Uses CSS variables */}
</div>
```

### Responsive Design

Use Tailwind's responsive prefixes:

- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

**Example:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Responsive grid */}
</div>
```

### Dark Mode

Dark mode is implemented using Tailwind's `dark:` variant:

```tsx
<div className="bg-background dark:bg-background text-foreground dark:text-foreground">
  {/* Adapts to dark mode */}
</div>
```

**Dark Mode Toggle:**
The project uses `next-themes` for theme switching. The `dark` class is applied to the `<html>` element.

### Custom Utilities

#### `cn()` Function

The `cn()` utility combines `clsx` and `tailwind-merge` for conditional classes:

```tsx
import { cn } from "@/lib/utils";

// Merges classes and resolves conflicts
<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  anotherCondition && "more-classes"
)}>
```

**Why `cn()`?**
- Resolves Tailwind class conflicts (last one wins)
- Handles conditional classes elegantly
- Type-safe with TypeScript

**Example:**
```tsx
function Button({ variant, className }) {
  return (
    <button
      className={cn(
        "base-button-styles",
        variant === "primary" && "bg-primary",
        variant === "secondary" && "bg-secondary",
        className // Allows overriding
      )}
    />
  );
}
```

### Tailwind with CVA

CVA works seamlessly with Tailwind:

```tsx
const buttonVariants = cva(
  // Base classes using Tailwind utilities
  "inline-flex items-center justify-center rounded-md font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        outline: "border bg-background",
      },
    },
  }
);

// Usage
<button className={cn(buttonVariants({ variant: "default" }))}>
  Button
</button>
```

### Class Naming Conventions

- **Use semantic names** - `bg-background` not `bg-white`
- **Combine utilities** - `flex items-center gap-4`
- **Use responsive prefixes** - `md:grid-cols-2`
- **Group related classes** - Keep spacing, colors, etc. together

**Example:**
```tsx
// ✅ Good - Semantic, organized
<div className="flex items-center justify-between gap-4 p-6 bg-card rounded-lg border shadow-sm">

// ❌ Bad - Non-semantic, disorganized
<div className="bg-white p-6 flex rounded-lg border gap-4 shadow-sm justify-between items-center">
```

### Performance Considerations

- Tailwind purges unused classes in production
- Use JIT mode for development (default in v4)
- Avoid dynamic class strings when possible
- Prefer composition over large class strings

---

## Design Tokens

### CSS Variable Naming Convention

Design tokens follow a consistent naming pattern:

**Format:** `--[category]-[property]` or `--[category]-[variant]-[property]`

**Examples:**
- `--background` - Core background color
- `--primary` - Primary color
- `--primary-foreground` - Text color on primary
- `--radius` - Base border radius
- `--radius-sm` - Small border radius

### Theme Variable Structure

Variables are organized in `src/styles/globals.css`:

1. **@theme inline** - Maps CSS variables to Tailwind
2. **:root** - Light mode values
3. **.dark** - Dark mode overrides

### Color Token Pattern

Each color has a foreground variant:

```css
--primary: oklch(...);
--primary-foreground: oklch(...);
```

This ensures proper contrast for text on colored backgrounds.

### Border Radius Tokens

```css
--radius: 0.625rem;           /* Base */
--radius-sm: calc(var(--radius) - 4px);
--radius-md: calc(var(--radius) - 2px);
--radius-lg: var(--radius);
--radius-xl: calc(var(--radius) + 4px);
```

### Using Design Tokens

**In CSS:**
```css
.custom-element {
  background-color: var(--background);
  color: var(--foreground);
  border-radius: var(--radius-lg);
}
```

**In Tailwind:**
```tsx
<div className="bg-background text-foreground rounded-lg">
  {/* Automatically uses CSS variables */}
</div>
```

**In JavaScript/TypeScript:**
```tsx
const styles = {
  backgroundColor: 'var(--background)',
  color: 'var(--foreground)',
};
```

### OKLCH Color Format

All colors use OKLCH format: `oklch(L C H)` or `oklch(L C H / alpha)`

- **L** - Lightness (0-1)
- **C** - Chroma (saturation, 0+)
- **H** - Hue (0-360 degrees)
- **Alpha** - Optional opacity (0-1)

**Example:**
```css
--primary: oklch(0.21 0.006 285.885);
/* Lightness: 21%, Chroma: 0.006, Hue: 285.885° */
```

---

## Usage Guidelines

### Semantic Colors vs Direct Colors

**Always prefer semantic colors:**

```tsx
// ✅ Good - Semantic, theme-aware
<div className="bg-background text-foreground">
  <button className="bg-primary text-primary-foreground">
    Action
  </button>
</div>

// ❌ Bad - Hard-coded, not theme-aware
<div className="bg-white text-black">
  <button className="bg-blue-500 text-white">
    Action
  </button>
</div>
```

**Benefits:**
- Automatic dark mode support
- Consistent color usage
- Easier theme updates
- Better accessibility

### When to Use Component Variants

**Button Variants:**

- **Default** - Primary actions, CTAs
- **Destructive** - Delete, remove, destructive actions
- **Outline** - Secondary actions, less emphasis
- **Secondary** - Alternative primary actions
- **Ghost** - Tertiary actions, minimal emphasis
- **Link** - Navigation, text links styled as buttons

**Example:**
```tsx
// Primary CTA
<Button variant="default">Sign Up</Button>

// Secondary action
<Button variant="outline">Learn More</Button>

// Destructive action
<Button variant="destructive">Delete Account</Button>

// Minimal action
<Button variant="ghost">Cancel</Button>
```

### Combining shadcn Components with Tailwind

You can extend shadcn components with Tailwind utilities:

```tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Add custom styling
<Button
  variant="default"
  className={cn(
    "w-full",           // Full width
    "md:w-auto",        // Auto width on medium screens
    "shadow-lg",        // Custom shadow
    className           // Allow prop overrides
  )}
>
  Custom Button
</Button>
```

### Accessibility Best Practices

1. **Use semantic HTML** - `<button>`, `<nav>`, `<main>`, etc.
2. **Include ARIA labels** - When text isn't descriptive enough
3. **Keyboard navigation** - All interactive elements should be keyboard accessible
4. **Focus states** - Always visible and clear
5. **Color contrast** - Use semantic colors that meet WCAG standards
6. **Screen readers** - Test with screen reader software

**Example:**
```tsx
// ✅ Accessible button
<button
  className="bg-primary text-primary-foreground"
  aria-label="Close dialog"
  onClick={handleClose}
>
  <XIcon className="size-4" />
</button>

// ✅ Accessible link
<Link
  href="/about"
  className="text-primary hover:underline"
  aria-label="Learn more about us"
>
  About Us
</Link>
```

### Dark Mode Considerations

1. **Test in both modes** - Always verify light and dark appearances
2. **Use semantic colors** - They adapt automatically
3. **Opacity for borders** - Dark mode uses opacity for subtle borders
4. **Image handling** - Consider `dark:invert` for logos/icons
5. **Contrast** - Ensure sufficient contrast in both modes

**Example:**
```tsx
// Automatically adapts to dark mode
<div className="bg-background text-foreground border border-border">
  Content
</div>

// Manual dark mode handling
<img
  src="/logo.svg"
  alt="Logo"
  className="dark:invert"
/>
```

### Component Customization Patterns

**Pattern 1: Extend Existing Component**

```tsx
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function IconButton({ icon, ...props }) {
  return (
    <Button
      {...props}
      className={cn("gap-2", props.className)}
    >
      {icon}
      {props.children}
    </Button>
  );
}
```

**Pattern 2: Create Variant with CVA**

```tsx
import { cva } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";

const customButtonVariants = cva(
  "", // No base classes, extend existing
  {
    variants: {
      style: {
        gradient: "bg-gradient-to-r from-primary to-accent",
      },
    },
  }
);

export function CustomButton({ style, ...props }) {
  return (
    <button
      className={cn(
        buttonVariants({ variant: props.variant }),
        customButtonVariants({ style })
      )}
      {...props}
    />
  );
}
```

**Pattern 3: Compose Multiple Components**

```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function CardButton({ children, ...props }) {
  return (
    <Card className="p-0 overflow-hidden">
      <Button
        {...props}
        className="w-full h-full rounded-none"
      >
        {children}
      </Button>
    </Card>
  );
}
```

### Code Examples

**Complete Component Example:**

```tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ActionButtonProps {
  variant?: "default" | "outline" | "destructive";
  size?: "sm" | "default" | "lg";
  children: React.ReactNode;
  className?: string;
}

export function ActionButton({
  variant = "default",
  size = "default",
  children,
  className,
}: ActionButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn("transition-all", className)}
    >
      {children}
    </Button>
  );
}
```

**Layout Example:**

```tsx
export function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <nav className="flex items-center justify-between">
            <Logo />
            <Navigation />
          </nav>
        </div>
      </header>
      
      <main className="mx-auto max-w-7xl px-6 py-12">
        {children}
      </main>
      
      <footer className="border-t border-border bg-muted mt-auto">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <FooterContent />
        </div>
      </footer>
    </div>
  );
}
```

---

## Summary

This style guide provides a comprehensive reference for maintaining visual consistency across the project. Key takeaways:

1. **Use semantic colors** - They adapt to themes automatically
2. **Follow component patterns** - Use CVA for variants
3. **Leverage shadcn/ui** - Customize components as needed
4. **Embrace Tailwind utilities** - Utility-first approach
5. **Maintain accessibility** - Semantic HTML and ARIA attributes
6. **Test both themes** - Light and dark mode

For questions or updates to this guide, refer to the actual implementation in:
- `src/styles/globals.css` - Color system and tokens
- `src/components/ui/` - Component implementations
- `components.json` - shadcn/ui configuration

