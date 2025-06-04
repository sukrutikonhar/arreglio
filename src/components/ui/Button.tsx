import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-button transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-medium",
    {
        variants: {
            variant: {
                default:
                    "bg-secondary text-white hover:text-white shadow-button hover:bg-secondary-light hover:scale-105 focus-visible:ring-secondary active:scale-95",
                outline:
                    "border-2 border-secondary text-secondary hover:bg-secondary/10 hover:text-white hover:scale-105 focus-visible:ring-secondary active:scale-95",
                ghost:
                    "text-secondary hover:bg-secondary/10 hover:scale-105 focus-visible:ring-secondary active:scale-95",
                link: "text-secondary underline-offset-4 hover:underline hover:text-secondary-light",
            },
            size: {
                default: "h-10 px-6 py-2",
                sm: "h-9 px-4",
                lg: "h-12 px-8",
                icon: "h-10 w-10",
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

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
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