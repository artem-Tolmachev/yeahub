import type { ButtonHTMLAttributes, ReactNode } from "react";

export type VariantsButton = 'primary' | 'reset' | 'secondary' | 'disabled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: VariantsButton;
    isActive?: boolean;
    children: ReactNode;
    onClick?: () => void;
    className?: string;
}