import Link from 'next/link';
import Arrow from './Arrow';

export type CtaItem = {
  label: string;
  href: string;
};

type CtaRowProps = {
  items: [CtaItem, CtaItem];
};

function CtaChip({ label, href, className }: CtaItem & { className?: string }) {
  return (
    <h1 className={`font-bignoodle text-[28px] leading-[1.1em] text-white ${className ?? ''}`}>
      <Link href={href} className="block" style={{ backgroundColor: '#DD0018' }}>
        {'\u00A0'}
        {label}
        {'\u00A0'}
        {' '}
      </Link>
    </h1>
  );
}

export default function CtaRow({ items }: CtaRowProps) {
  const [first, second] = items;
  return (
    <>
      <div className="relative mx-auto hidden h-[79px] w-full max-w-[980px] md:block">
        <Link href={first.href} aria-label={first.label} className="absolute left-[250px] top-[1px] block">
          <Arrow width={9} height={32} />
        </Link>
        <CtaChip {...first} className="absolute left-[269px] top-0" />
        <Link href={second.href} aria-label={second.label} className="absolute left-[518px] top-[1px] block">
          <Arrow width={9} height={32} />
        </Link>
        <CtaChip {...second} className="absolute left-[537px] top-0" />
      </div>
      <div className="flex flex-col items-center gap-4 px-4 py-8 md:hidden">
        <div className="flex items-center justify-center gap-2">
          <Arrow width={9} height={32} />
          <CtaChip {...first} />
          <Arrow width={9} height={32} />
        </div>
        <div className="flex items-center justify-center gap-2">
          <Arrow width={9} height={32} />
          <CtaChip {...second} />
          <Arrow width={9} height={32} />
        </div>
      </div>
    </>
  );
}
