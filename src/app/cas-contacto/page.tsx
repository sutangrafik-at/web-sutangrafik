import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import CtaRow from '@/components/CtaRow';
import HeaderNav from '@/components/HeaderNav';

export const metadata: Metadata = {
  title: 'CONTACTO | Sutan Grafik',
  openGraph: {
    title: 'CONTACTO | SUTAN GRAFIK cas',
  },
  alternates: {
    canonical: '/cas-contacto',
  },
};

export default function CasContactoPage() {
  return (
    <div className="w-full max-w-[980px] md:mx-auto">
      <HeaderNav active="kontaktua" lang="es" />
      <div className="hidden md:block">
        <div className="mb-[18px] mt-[34px] ml-[12px] w-[310px]">
          <p className="text-center font-bignoodle text-[53px] leading-[1.5em] text-white">
            <a href="mailto:sutangrafik@gmail.com">
              <span style={{ backgroundColor: '#DD0018', letterSpacing: '0.05em' }}>
                {'\u00A0'}contacto{'\u00A0'} {' '}
              </span>
            </a>
          </p>
        </div>
        <div className="mb-[-27px] ml-[83px] min-h-[105px] w-[622px]">
          <p
            className="font-bignoodle text-[29px] leading-[1.15em] text-accent"
            style={{ letterSpacing: '0.1em' }}
          >
            ¿necesitas un presupuesto para tus proyectos?
          </p>
          <p
            className="font-bignoodle text-[18px] leading-[1.15em] text-accent"
            style={{ letterSpacing: '0.1em' }}
          >
            ponte en contacto con nosotros y aclararemos dudas
          </p>
          <p className="font-bignoodle text-[18px] leading-[1.15em] text-accent" style={{ letterSpacing: '0.35em' }}>
            &nbsp;
          </p>
          <p className="text-center text-[16px] font-bold leading-[1.15em] text-accent">&nbsp;</p>
        </div>
        <div className="mb-[27px] ml-[83px]">
          <ContactForm lang="es" />
        </div>
      </div>
      <CtaRow
        className="mb-[5px]"
        items={[
          { label: '¿QUÉ ES SUTAN GRAFIK?', href: '/cas-bio' },
          { label: 'TRABAJOS REALIZADOS', href: '/cas-grafik' },
        ]}
      />
      <div className="flex flex-col items-center gap-6 px-4 py-8 md:hidden">
        <p className="text-center font-bignoodle text-[36px] leading-[1.5em] text-white">
          <a href="mailto:sutangrafik@gmail.com">
            <span style={{ backgroundColor: '#DD0018', letterSpacing: '0.05em' }}>
              {'\u00A0'}contacto{'\u00A0'} {' '}
            </span>
          </a>
        </p>
        <p
          className="text-center font-bignoodle text-[22px] leading-[1.15em] text-accent"
          style={{ letterSpacing: '0.1em' }}
        >
          ¿necesitas un presupuesto para tus proyectos?
        </p>
        <p
          className="text-center font-bignoodle text-[16px] leading-[1.15em] text-accent"
          style={{ letterSpacing: '0.1em' }}
        >
          ponte en contacto con nosotros y aclararemos dudas
        </p>
        <ContactForm lang="es" />
      </div>
    </div>
  );
}
