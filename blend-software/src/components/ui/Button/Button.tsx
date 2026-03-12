import React from 'react';
import styles from './Button.module.scss';
import { LucideIcon } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  as?: 'button' | 'a';
  href?: string;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  fullWidth = false,
  children,
  className,
  as: Tag = 'button',
  href,
  ...props
}: ButtonProps) {
  const cls = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  if (Tag === 'a') {
    return (
      <a href={href} className={cls}>
        {Icon && iconPosition === 'left' && <Icon size={16} strokeWidth={2} />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon size={16} strokeWidth={2} />}
      </a>
    );
  }

  return (
    <button className={cls} {...props}>
      {Icon && iconPosition === 'left' && <Icon size={16} strokeWidth={2} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={16} strokeWidth={2} />}
    </button>
  );
}
