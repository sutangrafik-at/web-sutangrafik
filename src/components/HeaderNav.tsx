import Image from 'next/image';
import Link from 'next/link';

export type NavKey = 'grafik' | 'bio' | 'kontaktua';

type Lang = 'eu' | 'es';

const NAV_ITEMS: {
  key: NavKey;
  label: Record<Lang, string>;
  href: Record<Lang, string>;
  left: number;
}[] = [
  { key: 'grafik', label: { eu: 'GRAFIK', es: 'GRAFIK' }, href: { eu: '/grafik', es: '/cas-grafik' }, left: 745 },
  { key: 'bio', label: { eu: 'BIO', es: 'BIO' }, href: { eu: '/bio', es: '/cas-bio' }, left: 826 },
  { key: 'kontaktua', label: { eu: 'kontaktuA', es: 'ContaCtO' }, href: { eu: '/kontaktua', es: '/cas-contacto' }, left: 878 },
];

const LOGO_ALT = 'Sutan Grafik Diseño Grafico Diseinu grafikoa';

export default function HeaderNav({ active, lang }: { active: NavKey; lang: Lang }) {
  const activeItem = NAV_ITEMS.find((item) => item.key === active)!;
  const homeHref = lang === 'eu' ? '/' : '/cas';

  return (
    <nav className="mx-auto w-full max-w-[980px]">
      <div className="relative hidden h-[202px] md:block">
        <Link href={homeHref} className="absolute left-0 top-[50px] block">
          <Image src="/images/logo.png" alt={LOGO_ALT} width={119} height={90} className="h-[90px] w-[119px]" />
        </Link>
        <Link
          href={activeItem.href.eu}
          className={`absolute left-[929px] top-[57px] font-bignoodle text-[16px] leading-none ${
            lang === 'eu' ? 'text-accent-hover' : 'text-accent'
          }`}
        >
          EUS
        </Link>
        <Link
          href={activeItem.href.es}
          className={`absolute left-[955px] top-[57px] font-bignoodle text-[16px] leading-none ${
            lang === 'es' ? 'text-accent-hover' : 'text-accent'
          }`}
        >
          CAS
        </Link>
        {NAV_ITEMS.map((item) => (
          <h1 key={item.key} className="absolute top-[139px] font-bignoodle text-[28px] leading-[1.1em] text-white" style={{ left: item.left }}>
            <Link
              href={item.href[lang]}
              className="block"
              style={{ backgroundColor: item.key === active ? '#A82020' : '#DD0018' }}
            >
              {'\u00A0'}
              {item.label[lang]}
              {'\u00A0'}
              {' '}
            </Link>
          </h1>
        ))}
      </div>
      <div className="flex flex-col items-center gap-4 px-4 py-8 md:hidden">
        <Link href={homeHref}>
          <Image src="/images/logo.png" alt={LOGO_ALT} width={89} height={67} className="h-[67px] w-[89px]" />
        </Link>
        <div className="flex items-center justify-center gap-2">
          {NAV_ITEMS.map((item) => (
            <h1 key={item.key} className="font-bignoodle text-[24px] leading-[1.1em] text-white">
              <Link
                href={item.href[lang]}
                className="block"
                style={{ backgroundColor: item.key === active ? '#A82020' : '#DD0018' }}
              >
                {'\u00A0'}
                {item.label[lang]}
                {'\u00A0'}
                {' '}
              </Link>
            </h1>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={activeItem.href.eu}
            className={`font-bignoodle text-[16px] leading-none ${lang === 'eu' ? 'text-accent-hover' : 'text-accent'}`}
          >
            EUS
          </Link>
          <Link
            href={activeItem.href.es}
            className={`font-bignoodle text-[16px] leading-none ${lang === 'es' ? 'text-accent-hover' : 'text-accent'}`}
          >
            CAS
          </Link>
        </div>
      </div>
    </nav>
  );
}
