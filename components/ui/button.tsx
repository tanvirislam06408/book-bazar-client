import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 active:translate-y-0.5 border-b-2 border-indigo-900",
        tactile:
          "bg-indigo-600 text-white shadow-md hover:bg-indigo-500 active:translate-y-0.5 border-b-4 border-indigo-950",
        accent:
          "bg-orange-600 text-white shadow-md hover:bg-orange-500 active:translate-y-0.5 border-b-4 border-orange-800",
        emerald:
          "bg-emerald-600 text-white shadow-sm hover:bg-emerald-500 active:translate-y-0.5 border-b-4 border-emerald-800",
        destructive:
          "bg-red-600 text-white shadow-sm hover:bg-red-500 active:translate-y-0.5 border-b-2 border-red-800",
        outline:
          "border-2 border-slate-200 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-300 shadow-2xs active:translate-y-0.5",
        secondary:
          "bg-indigo-50 text-indigo-700 hover:bg-indigo-100/80 active:translate-y-0.5",
        ghost:
          "text-slate-700 hover:bg-indigo-50 hover:text-indigo-700",
        link:
          "text-indigo-600 underline-offset-4 hover:underline p-0 h-auto font-semibold",
        social:
          "border-2 border-slate-200 bg-white text-slate-800 hover:bg-slate-50/80 hover:border-slate-300 shadow-sm active:translate-y-0.5 transition-all font-semibold",
      },
      size: {
        default: "h-11 px-5 py-2.5 rounded-xl",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        lg: "h-13 rounded-2xl px-6 text-base font-extrabold",
        xl: "h-14 rounded-2xl px-8 text-base font-extrabold",
        icon: "h-10 w-10 rounded-xl p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
