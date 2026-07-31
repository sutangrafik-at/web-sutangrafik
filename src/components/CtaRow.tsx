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
      <div className={`relative mx-auto hidden h-[32px] w-full max-w-[980px] md:block ${className}`}>
        <Link href={first.href} aria-label={first.label} className="absolute left-[250px] top-[1px] block">
          <Arrow width={9} height={32} />
        </Link>
        <Chip {...first} className="absolute left-[269px] top-0" />
        <Link href={second.href} aria-label={second.label} className="absolute left-[518px] top-[1px] block">
          <Arrow width={9} height={32} />
        </Link>
        <Chip {...second} className="absolute left-[537px] top-0" />
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
