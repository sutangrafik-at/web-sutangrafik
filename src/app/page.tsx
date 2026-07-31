import Image from 'next/image';
import Link from 'next/link';
import Chip from '@/components/Chip';
import LinkBar from '@/components/LinkBar';

const LOGO_ALT = 'Sutan Grafik Diseño Grafico Diseinu grafikoa';

const EU_ICONS = [
  { label: 'Tel', href: 'tel:688840308' },
  { label: 'Email', href: 'mailto:sutangrafik@gmail.com' },
] as const;

const EU_NAV = [
  { label: 'GRAFIK', href: '/grafik', left: 370 },
  { label: 'BIO', href: '/bio', left: 451 },
  { label: 'kontaktuA', href: '/kontaktua', left: 503 },
] as const;

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[980px]">
      <div className="relative hidden h-[347px] md:block">
        <Image
          src="/images/logo.png"
          alt={LOGO_ALT}
          width={354}
          height={266}
          className="absolute left-[313px] top-[71px] h-[266px] w-[354px]"
        />
        <Link
          href="/"
          className="absolute left-[830px] top-[71px] w-[26px] text-center font-bignoodle text-[16px] leading-[1.5em] text-accent-hover"
        >
          EUS
        </Link>
        <Link
          href="/cas"
          className="absolute left-[856px] top-[71px] w-[26px] text-center font-bignoodle text-[16px] leading-[1.5em] text-accent"
        >
          CAS
        </Link>
      </div>
      <div className="relative hidden h-[151px] md:block">
        {EU_NAV.map((item) => (
          <Chip key={item.label} label={item.label} href={item.href} className="absolute top-[10px]" style={{ left: item.left }} />
        ))}
        <LinkBar items={[...EU_ICONS]} className="absolute left-[469px] top-[65px]" />
      </div>
      <div className="flex flex-col items-center gap-6 px-4 py-6 md:hidden">
        <div className="flex w-full items-center justify-end gap-1">
          <Link href="/" className="font-bignoodle text-[16px] leading-none text-accent-hover">
            EUS
          </Link>
          <Link href="/cas" className="font-bignoodle text-[16px] leading-none text-accent">
            CAS
          </Link>
        </div>
        <Image src="/images/logo.png" alt={LOGO_ALT} width={240} height={180} className="h-[180px] w-[240px]" />
        <div className="flex items-center justify-center gap-[13px]">
          {EU_NAV.map((item) => (
            <Chip key={item.label} label={item.label} href={item.href} />
          ))}
        </div>
        <LinkBar items={[...EU_ICONS]} />
      </div>
    </div>
  );
}
