import type { Metadata } from 'next';
import Arrow from '@/components/Arrow';
import CtaRow from '@/components/CtaRow';
import HeaderNav from '@/components/HeaderNav';
import PortfolioGallery from '@/components/PortfolioGallery';
import ServicesColumns, { ServiceColumn } from '@/components/ServicesColumns';

const SERVICES: [ServiceColumn, ServiceColumn] = [
  {
    title: 'DISEINU GRAFIKOA',
    items: [
      'Logotipoak / Irudi korporatiboa',
      'Kartelak / Flyerrak / Merchandising',
      'Kamixetak / Diskak / Pegatinak',
      'Euskarri digitalak / Argazki-muntaiak',
    ],
  },
  {
    title: 'EDITORIALA IRUDIA',
    items: [
      'Liburuxkak / Aldizkariak',
      'Produkzio editoriala',
      'Ilustrazio digitala / Logotipoak',
      'Eskuorriak / Material grafikoa',
    ],
  },
];

export const metadata: Metadata = {
  title: 'GRAFIK | Sutan Grafik | Diseinu grafikoa',
  openGraph: {
    title: 'GRAFIK | SUTAN GRAFIK eus',
  },
  alternates: {
    canonical: '/grafik',
  },
};

export default function GrafikPage() {
  return (
    <div className="w-full max-w-[980px] md:ml-[130px]">
      <HeaderNav active="grafik" lang="eu" />
      <div className="hidden md:block">
        <div className="mt-[33px] mb-[11px] ml-[17px] w-[310px]">
          <p className="text-center font-bignoodle text-[53px] leading-[1.5em] text-white">
            <span style={{ backgroundColor: '#DD0018', letterSpacing: '0.05em' }}>{'\u00A0'}</span>
            <span style={{ backgroundColor: '#DD0018', letterSpacing: '0.25em' }}>GRAFIK</span>
          </p>
          <p className="text-center text-[16px] font-bold leading-[1.14em] text-accent">&nbsp;</p>
        </div>
        <p
          className="mb-[13px] text-center font-bignoodle text-[26px] leading-[0.5em] text-accent"
          style={{ letterSpacing: '0.45em' }}
        >
          BEHARRIZANEN ARABERAKO SOLUZIO GRAFIKOAK
        </p>
        <div className="mb-[16px] h-[5px] w-[979px] border-t-[4px] border-accent" />
        <p
          className="mt-[8px] mb-[40px] text-center font-bignoodle text-[17px] leading-[0.5em] text-accent"
          style={{ letterSpacing: '0.23em' }}
        >
          GURE ESPERIENTZIAN OINARRITURIKO AHOLKULARITZA, SORKUNTZA PROZESU GUZTIAZ ARDURATZEN GARA
        </p>
        <div className="relative mb-[69px] mt-[8px] h-[160px]">
          <Arrow width={47} height={160} className="absolute left-[88px] top-[8px]" />
          <Arrow width={47} height={160} className="absolute left-[589px] top-[8px]" />
          <ServicesColumns columns={SERVICES} />
        </div>
      </div>
      <div className="mb-[30px] w-full px-4 md:ml-[205px] md:mb-[30px] md:w-[576px] md:px-0">
        <PortfolioGallery />
      </div>
      <CtaRow
        className="mb-[46px]"
        items={[
          { label: 'ZER DA SUTAN GRAFIK?', href: '/bio' },
          { label: 'aurrekontua eskatu', href: '/kontaktua' },
        ]}
      />
      <div className="flex flex-col items-center gap-6 px-4 py-8 md:hidden">
        <p className="text-center font-bignoodle text-[36px] leading-[1.5em] text-white">
          <span style={{ backgroundColor: '#DD0018', letterSpacing: '0.05em' }}>{'\u00A0'}</span>
          <span style={{ backgroundColor: '#DD0018', letterSpacing: '0.25em' }}>GRAFIK</span>
        </p>
        <p
          className="text-center font-bignoodle text-[20px] leading-[1.5em] text-accent"
          style={{ letterSpacing: '0.45em' }}
        >
          BEHARRIZANEN ARABERAKO SOLUZIO GRAFIKOAK
        </p>
        <div className="h-[4px] w-full border-t-[4px] border-accent" />
        <p
          className="text-center font-bignoodle text-[15px] leading-[1.4em] text-accent"
          style={{ letterSpacing: '0.23em' }}
        >
          GURE ESPERIENTZIAN OINARRITURIKO AHOLKULARITZA, SORKUNTZA PROZESU GUZTIAZ ARDURATZEN GARA
        </p>
        <ServicesColumns columns={SERVICES} />
      </div>
    </div>
  );
}
