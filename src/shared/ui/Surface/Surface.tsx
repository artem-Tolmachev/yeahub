import clsx from 'clsx';
import './surface.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
  bcgr?: string;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export default function Surface({
  children,
  className,
  variant = 'default',
  padding = 'md',
  bcgr = 'light',
  onClick
}: Props) {
  return (
    <div
    onClick={onClick}
      className={clsx(
        'surface',
        `surface--${variant}`,
        `surface--padding-${padding}`,
        `surface--bcgr-${bcgr}`,
        className
      )}
    >
      {children}
    </div>
  );
}