import Link from 'next/link';
import Arrow from './Arrow';
import Chip from './Chip';

export type CtaItem = {
  label: string;
  href: string;
};

type CtaRowProps = {
  items: [CtaItem, CtaItem];
  className?: string;
};

export default function CtaRow({ items, className = '' }: CtaRowProps) {
  const [first, second] = items;
  return (
    <>
      <div
        className={`relative hidden h-[32px] w-full max-w-[980px] md:block ${className}`}
      >
        <Link
          href={first.href}
          aria-label={first.label}
          className="absolute top-[1px] left-[250px] block"
        >
          <Arrow width={9} height={32} />
        </Link>
        <Chip {...first} className="absolute top-0 left-[269px]" />
        <Link
          href={second.href}
          aria-label={second.label}
          className="absolute top-[1px] left-[518px] block"
        >
          <Arrow width={9} height={32} />
        </Link>
        <Chip {...second} className="absolute top-0 left-[537px]" />
      </div>
      <div className="flex flex-col items-center gap-4 px-4 py-8 md:hidden">
        <div className="flex items-center justify-center gap-2">
          <Arrow width={9} height={32} />
          <Chip {...first} />
          <Arrow width={9} height={32} />
        </div>
        <div className="flex items-center justify-center gap-2">
          <Arrow width={9} height={32} />
          <Chip {...second} />
          <Arrow width={9} height={32} />
        </div>
      </div>
    </>
  );
}
