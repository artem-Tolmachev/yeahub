import clsx from 'clsx';
import type { ButtonProps } from './types';
import './button.scss';

function Button({ children, onClick, isActive, variant, className }: ButtonProps) {
  return (
    <button
      className={clsx(
        'button', 
        isActive && 'active',
        variant === 'reset' && 'button__reset',
        variant === 'primary' && 'button__primary',
        variant === 'secondary' && 'button__secondary',
        variant === 'disabled' && 'button__disabled',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button> 
  );
}

export default Button;
