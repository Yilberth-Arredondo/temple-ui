// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { jsx } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// src/components/ui/card.tsx
import * as React2 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var Card = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  "div",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  "div",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

// src/components/ui/input.tsx
import * as React3 from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var Input = React3.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx3(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/hooks/use-theme.ts
import { useEffect, useState } from "react";
var THEMES = ["arrachis"];
var STORAGE_KEYS = {
  THEME: "temple-ui-theme",
  MODE: "temple-ui-mode"
};
function getSystemMode() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function getStoredValue(key, defaultValue) {
  if (typeof window === "undefined") return defaultValue;
  return localStorage.getItem(key) ?? defaultValue;
}
function setStoredValue(key, value) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, value);
}
function useTheme() {
  const [theme, setThemeState] = useState(() => getStoredValue(STORAGE_KEYS.THEME, "arrachis"));
  const [mode, setModeState] = useState(
    () => getStoredValue(STORAGE_KEYS.MODE, "system")
  );
  const [systemMode, setSystemMode] = useState(() => getSystemMode());
  const resolvedMode = mode === "system" ? systemMode : mode;
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => setSystemMode(getSystemMode());
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.classList.toggle("dark", resolvedMode === "dark");
  }, [theme, resolvedMode]);
  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    setStoredValue(STORAGE_KEYS.THEME, newTheme);
  };
  const setMode = (newMode) => {
    setModeState(newMode);
    setStoredValue(STORAGE_KEYS.MODE, newMode);
  };
  const colors = {
    primary: "hsl(var(--primary))",
    secondary: "hsl(var(--secondary))",
    accent: "hsl(var(--accent))",
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))"
  };
  return {
    theme,
    setTheme,
    mode,
    setMode,
    themes: THEMES,
    systemMode,
    resolvedMode,
    colors
  };
}
export {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  buttonVariants,
  cn,
  useTheme
};
//# sourceMappingURL=index.mjs.map