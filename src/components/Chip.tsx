import type { CSSProperties } from 'react';
import Link from 'next/link';

type ChipProps = {
  label: string;
  href: string;
  active?: boolean;
  size?: 'md' | 'lg';
  className?: string;
  style?: CSSProperties;
};

export default function Chip({
  label,
  href,
  active = false,
  size = 'lg',
  className = '',
  style,
}: ChipProps) {
  return (
    <h1
      className={`font-bignoodle leading-[1.15em] text-white ${
        size === 'lg' ? 'text-[28px]' : 'text-[24px]'
      } ${className}`}
      style={style}
    >
      <Link href={href} className="block" style={{ backgroundColor: active ? '#A82020' : '#DD0018' }}>
        {'\u00A0'}
        {label}
        {'\u00A0'}
        {' '}
      </Link>
    </h1>
  );
}
