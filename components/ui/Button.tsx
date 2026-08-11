import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-hover",
        secondary:
          "bg-surface-1 text-ink border border-hairline hover:bg-surface-2 hover:border-hairline-strong",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-5 py-2.5 text-sm",
        lg: "px-5 py-3 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonOwnProps = VariantProps<typeof buttonVariants> & {
  href?: string;
  className?: string;
};

type ButtonProps = ButtonOwnProps &
  (React.AnchorHTMLAttributes<HTMLAnchorElement> &
    React.ButtonHTMLAttributes<HTMLButtonElement>);

export default function Button({
  href,
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
