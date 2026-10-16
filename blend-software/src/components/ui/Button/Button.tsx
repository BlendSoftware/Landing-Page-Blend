import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonVariant = 'primary' | 'secondary' | 'ink' | 'sun' | 'quiet';
type ButtonSize = 'sm' | 'md' | 'lg';

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

type LinkButtonProps = CommonProps & { href: string } & Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'className'>;
type NativeButtonProps = CommonProps & { href?: undefined } & Omit<ComponentPropsWithoutRef<'button'>, 'className'>;

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const isInternal = (href: string) => href.startsWith('/') || href.startsWith('#');

/**
 * Renders a Next.js <Link> for internal routes, a plain <a> for mailto/external
 * URLs and a <button> when no href is given — so every button does something.
 */
export default function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', fullWidth = false, className, children } = props;
  const cls = [styles.btn, styles[variant], styles[size], fullWidth && styles.fullWidth, className]
    .filter(Boolean)
    .join(' ');

  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, fullWidth: _f, className: _c, children: _ch, ...rest } = props;
    if (isInternal(href)) {
      return (
        <Link href={href} className={cls} {...rest}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }

  const { variant: _v, size: _s, fullWidth: _f, className: _c, children: _ch, href: _h, ...rest } = props;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
