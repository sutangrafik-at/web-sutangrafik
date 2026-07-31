import type { CSSProperties } from 'react';
import Image from 'next/image';

export type LinkBarItem = {
  label: 'Tel' | 'Email' | 'Facebook' | 'Instagram';
  href: string;
};

const ICONS: Record<LinkBarItem['label'], string> = {
  Tel: '/images/icons/phone.png',
  Email: '/images/icons/email.png',
  Facebook: '/images/icons/facebook.png',
  Instagram: '/images/icons/instagram.png',
};

const EXTERNAL: Record<LinkBarItem['label'], boolean> = {
  Tel: false,
  Email: false,
  Facebook: true,
  Instagram: true,
};

type LinkBarProps = {
  items: LinkBarItem[];
  className?: string;
  style?: CSSProperties;
};

export default function LinkBar({ items, className = '', style }: LinkBarProps) {
  return (
    <ul aria-label="Barra de redes sociales" className={`flex w-fit items-center gap-[5px] ${className}`} style={style}>
      {items.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            aria-label={item.label}
            className="block"
            {...(EXTERNAL[item.label] ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <Image
              src={ICONS[item.label]}
              alt={item.label}
              width={18}
              height={18}
              className="h-[18px] w-[18px] object-cover"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
