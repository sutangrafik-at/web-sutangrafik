import Image from 'next/image';
import Link from 'next/link';
import Chip from '@/components/Chip';
import LinkBar, { LinkBarItem } from '@/components/LinkBar';
import { asset } from '@/lib/assets';

type Lang = 'eu' | 'es';

const LOGO_ALT = 'Sutan Grafik Diseño Grafico Diseinu grafikoa';

const HOME_DATA: Record<
  Lang,
  {
    euHref: string;
    esHref: string;
    chips: { label: string; href: string; left: number }[];
    chipsTop: number;
    linkbarLeft: number;
    linkbarTop: number;
    icons: LinkBarItem[];
  }
> = {
  eu: {
    euHref: '/',
    esHref: '/cas',
    chips: [
      { label: 'GRAFIK', href: '/grafik', left: 370 },
      { label: 'BIO', href: '/bio', left: 451 },
      { label: 'kontaktuA', href: '/kontaktua', left: 503 },
    ],
    chipsTop: 382,
    linkbarLeft: 469,
    linkbarTop: 437,
    icons: [
      { label: 'Tel', href: 'tel:688840308' },
      { label: 'Email', href: 'mailto:sutangrafik@gmail.com' },
    ],
  },
  es: {
    euHref: '/',
    esHref: '/cas',
    chips: [
      { label: 'GRAFIK', href: '/cas-grafik', left: 377 },
      { label: 'BIO', href: '/cas-bio', left: 458 },
      { label: 'ContaCtO', href: '/cas-contacto', left: 510 },
    ],
    chipsTop: 383,
    linkbarLeft: 446,
    linkbarTop: 446,
    icons: [
      { label: 'Tel', href: 'tel:688840308' },
      { label: 'Email', href: 'mailto:sutangrafik@gmail.com' },
      { label: 'Facebook', href: 'https://www.facebook.com/sutan.grafik.3' },
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/sutangrafikdiseinua/',
      },
    ],
  },
};

export default function HomeContent({ lang }: { lang: Lang }) {
  const data = HOME_DATA[lang];
  return (
    <div className="w-full max-w-[980px] md:mx-auto">
      <div className="relative hidden h-[523px] md:block">
        <Image
          src={asset('/images/logo.png')}
          alt={LOGO_ALT}
          width={354}
          height={266}
          className="absolute top-[96px] left-[313px] h-[266px] w-[354px]"
        />
        <Link
          href={data.euHref}
          className={`font-bignoodle absolute top-[96px] left-[830px] w-[26px] text-center text-[16px] leading-[1.5em] ${
            lang === 'eu' ? 'text-accent-hover' : 'text-accent'
          }`}
        >
          EUS
        </Link>
        <Link
          href={data.esHref}
          className={`font-bignoodle absolute top-[96px] left-[856px] w-[26px] text-center text-[16px] leading-[1.5em] ${
            lang === 'es' ? 'text-accent-hover' : 'text-accent'
          }`}
        >
          CAS
        </Link>
        {data.chips.map((chip) => (
          <Chip
            key={chip.label}
            label={chip.label}
            href={chip.href}
            className="absolute"
            style={{ left: chip.left, top: data.chipsTop }}
          />
        ))}
        <LinkBar
          items={data.icons}
          className="absolute"
          style={{ left: data.linkbarLeft, top: data.linkbarTop }}
        />
      </div>
      <div className="flex flex-col items-center gap-6 px-4 py-6 md:hidden">
        <div className="flex w-full items-center justify-end gap-1">
          <Link
            href={data.euHref}
            className={`font-bignoodle text-[16px] leading-none ${lang === 'eu' ? 'text-accent-hover' : 'text-accent'}`}
          >
            EUS
          </Link>
          <Link
            href={data.esHref}
            className={`font-bignoodle text-[16px] leading-none ${lang === 'es' ? 'text-accent-hover' : 'text-accent'}`}
          >
            CAS
          </Link>
        </div>
        <Image
          src={asset('/images/logo.png')}
          alt={LOGO_ALT}
          width={240}
          height={180}
          className="h-[180px] w-[240px]"
        />
        <div className="flex items-center justify-center gap-[13px]">
          {data.chips.map((chip) => (
            <Chip key={chip.label} label={chip.label} href={chip.href} />
          ))}
        </div>
        <LinkBar items={data.icons} />
      </div>
    </div>
  );
}
