import type { Metadata } from 'next';
import Arrow from '@/components/Arrow';
import CtaRow from '@/components/CtaRow';
import HeaderNav from '@/components/HeaderNav';
import PortfolioGallery from '@/components/PortfolioGallery';
import ServicesColumns, { ServiceColumn } from '@/components/ServicesColumns';

const SERVICES: [ServiceColumn, ServiceColumn] = [
  {
    title: 'DISEÑO GRÁFICO',
    items: [
      'Logotipos / Imagen corporativa',
      'Cartekes / Flyers / Merchandising',
      'Camisetas / Discos / Pegatinas',
      'Soportes digitales / Fotomontaje',
    ],
  },
  {
    title: 'EDITORIAL IMAGEN',
    items: [
      'Publicaciones / Revistas',
      'Producción editorial',
      'Ilustración digital / Logotipos',
      'Dípticos / Material gráfico',
    ],
  },
];

const CAS_DESCRIPTION =
  'DISEÑO GRÁFICO - IMAGEN - MAQUETACIÓN - MERCHANDISING\n\nSoluciones gráficas adaptadas a tus necesidades\n\nLogotipos / Imagen corporativa / Carteles / Flyers / Merchandising / Camisetas / Discos / Editorial / Ilustración digital / Fotomontaje';

export const metadata: Metadata = {
  title: 'GRAFIK | Sutan Grafik',
  description: CAS_DESCRIPTION,
  openGraph: {
    title: 'GRAFIK | SUTAN GRAFIK cas',
    description: CAS_DESCRIPTION,
  },
  alternates: {
    canonical: '/cas-grafik',
  },
};

export default function CasGrafikPage() {
  return (
    <div className="w-full max-w-[980px] md:mx-auto md:-mt-[25px]">
      <HeaderNav active="grafik" lang="es" />
      <div className="hidden md:block">
        <div className="mt-[33px] mb-[11px] ml-[17px] w-[310px]">
          <p className="font-bignoodle text-center text-[53px] leading-[1.5em] text-white">
            <span
              style={{ backgroundColor: '#DD0018', letterSpacing: '0.05em' }}
            >
              {'\u00A0'}
            </span>
            <span
              style={{ backgroundColor: '#DD0018', letterSpacing: '0.25em' }}
            >
              GRAFIK
            </span>
          </p>
          <p className="text-accent text-center text-[16px] leading-[1.14em] font-bold">
            &nbsp;
          </p>
        </div>
        <p
          className="font-bignoodle text-accent mb-[13px] text-center text-[23px] leading-[0.5em]"
          style={{ letterSpacing: '0.45em' }}
        >
          SOLUCIONES GRÁFICAS ADAPTADAS A TUS NECESIDADES
        </p>
        <div className="border-accent mb-[16px] h-[5px] w-[979px] border-t-[4px]" />
        <p
          className="font-bignoodle text-accent mt-[8px] mb-[40px] text-center text-[15px] leading-[0.5em]"
          style={{ letterSpacing: '0.2em' }}
        >
          TE OFRECEMOS ASESORAMIENTO BASADO EN NUESTRA EXPERIENCIA,
          ENCARGÁNDONOS DEL PROCESO CREATIVO DE PRINCIPIO A FIN
        </p>
        <div className="relative mt-[8px] mb-[44px] h-[160px]">
          <Arrow
            width={47}
            height={160}
            className="absolute top-[8px] left-[88px]"
          />
          <Arrow
            width={47}
            height={160}
            className="absolute top-[8px] left-[589px]"
          />
          <ServicesColumns columns={SERVICES} />
        </div>
      </div>
      <div className="mb-[30px] w-full px-4 md:mb-[52px] md:ml-[201px] md:w-[576px] md:px-0">
        <PortfolioGallery />
      </div>
      <CtaRow
        className="mb-[52px]"
        items={[
          { label: '¿QUÉ ES SUTAN GRAFIK?', href: '/cas-bio' },
          { label: 'PEDIR PRESUPUESTO', href: '/cas-contacto' },
        ]}
      />
      <div className="flex flex-col items-center gap-6 px-4 py-8 md:hidden">
        <p className="font-bignoodle text-center text-[36px] leading-[1.5em] text-white">
          <span style={{ backgroundColor: '#DD0018', letterSpacing: '0.05em' }}>
            {'\u00A0'}
          </span>
          <span style={{ backgroundColor: '#DD0018', letterSpacing: '0.25em' }}>
            GRAFIK
          </span>
        </p>
        <p
          className="font-bignoodle text-accent text-center text-[20px] leading-[1.5em]"
          style={{ letterSpacing: '0.45em' }}
        >
          SOLUCIONES GRÁFICAS ADAPTADAS A TUS NECESIDADES
        </p>
        <div className="border-accent h-[4px] w-full border-t-[4px]" />
        <p
          className="font-bignoodle text-accent text-center text-[15px] leading-[1.4em]"
          style={{ letterSpacing: '0.2em' }}
        >
          TE OFRECEMOS ASESORAMIENTO BASADO EN NUESTRA EXPERIENCIA,
          ENCARGÁNDONOS DEL PROCESO CREATIVO DE PRINCIPIO A FIN
        </p>
        <ServicesColumns columns={SERVICES} />
      </div>
    </div>
  );
}
