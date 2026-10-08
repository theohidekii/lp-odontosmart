import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';
import { isWhatsAppLink, trackWhatsAppClick } from '@/src/lib/tracking';

const baseStyle =
  'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1';

const variants = {
  primary: 'bg-[#166534] text-white hover:bg-[#14532d]',
  secondary: 'bg-[#1a457c] text-white hover:bg-[#12315a]',
  outline: 'border-2 border-[#1a457c] text-[#1a457c] hover:bg-[#1a457c] hover:text-white',
} as const;

type ButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'onClick'> & {
  children: ReactNode;
  variant?: keyof typeof variants;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
};

/** Link-botão; com `href` abre em nova aba e registra o clique quando é WhatsApp. */
export function Button({ children, className = '', variant = 'primary', href, onClick, ...props }: ButtonProps) {
  const cls = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        onClick={(event) => {
          if (isWhatsAppLink(href)) trackWhatsAppClick();
          onClick?.(event);
        }}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
