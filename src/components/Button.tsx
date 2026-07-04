import { forwardRef, type Ref } from "react";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
    href?: never;
  };

type ButtonAsAnchor = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-accent-indigo)] text-white shadow-soft hover:bg-[var(--color-accent-indigo-strong)]",
  secondary:
    "border-subtle bg-white/70 text-[var(--color-text-primary)] hover:bg-white",
  ghost:
    "text-[var(--color-text-primary)] hover:bg-[var(--color-border)]/50",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg gap-1.5",
  md: "px-6 py-3.5 text-sm rounded-xl gap-2",
  lg: "px-7 py-4 text-base rounded-xl gap-2.5",
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "left",
      fullWidth = false,
      className = "",
      children,
      ...rest
    },
    ref
  ) => {
    const baseClasses = `button-scale hover-lift inline-flex items-center justify-center font-medium transition-colors duration-200 ${
      variantStyles[variant]
    } ${sizeStyles[size]} ${fullWidth ? "w-full" : ""} ${className}`;

    const content = (
      <>
        {icon && iconPosition === "left" && icon}
        {children}
        {icon && iconPosition === "right" && icon}
      </>
    );

    if (rest.as === "a") {
      const { as, ...anchorProps } = rest;

      return (
        <a
          ref={ref as Ref<HTMLAnchorElement>}
          className={baseClasses}
          {...anchorProps}
        >
          {content}
        </a>
      );
    }

    const { as, ...buttonProps } = rest as ButtonAsButton;

    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        className={baseClasses}
        {...buttonProps}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;