import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import CtaRow from '@/components/CtaRow';
import HeaderNav from '@/components/HeaderNav';

export const metadata: Metadata = {
  title: 'KONTAKTUA | Sutan Grafik',
  openGraph: {
    title: 'KONTAKTUA | SUTAN GRAFIK eus',
  },
  alternates: {
    canonical: '/kontaktua',
  },
};

export default function KontaktuaPage() {
  return (
    <div className="w-full max-w-[980px] md:ml-[130px]">
      <HeaderNav active="kontaktua" lang="eu" />
      <div className="hidden md:block">
        <div className="mb-[18px] mt-[34px] ml-[23px] w-[310px]">
          <p className="text-center font-bignoodle text-[53px] leading-[1.5em] text-white">
            <a href="mailto:sutangrafik@gmail.com">
              <span style={{ backgroundColor: '#DD0018', letterSpacing: '0.05em' }}>
                {'\u00A0'}kontaktua{'\u00A0'} {' '}
              </span>
            </a>
          </p>
        </div>
        <div className="mb-[-15px] ml-[83px] w-[622px]">
          <p
            className="font-bignoodle text-[29px] leading-[1.15em] text-accent"
            style={{ letterSpacing: '0.1em' }}
          >
            ZURE PROIEKTUETARAKO AURREKONTU BAT BEHAR DUZU?
          </p>
          <p
            className="font-bignoodle text-[18px] leading-[1.15em] text-accent"
            style={{ letterSpacing: '0.1em' }}
          >
            JARRI ZAITEZ GUREKIN HARREMANETAN ETA ZURE ZALANTZAK ARGITUKO DITUGU
          </p>
          <p className="font-bignoodle text-[18px] leading-[1.15em] text-accent" style={{ letterSpacing: '0.35em' }}>
            &nbsp;
          </p>
          <p className="text-center text-[16px] font-bold leading-[1.15em] text-accent">&nbsp;</p>
        </div>
        <div className="mb-[25px] ml-[83px]">
          <ContactForm />
        </div>
      </div>
      <CtaRow
        className="mb-[5px]"
        items={[
          { label: 'ZER DA SUTAN GRAFIK?', href: '/bio' },
          { label: 'EGINDAKO LANAK IKUSI', href: '/grafik' },
        ]}
      />
      <div className="flex flex-col items-center gap-6 px-4 py-8 md:hidden">
        <p className="text-center font-bignoodle text-[36px] leading-[1.5em] text-white">
          <a href="mailto:sutangrafik@gmail.com">
            <span style={{ backgroundColor: '#DD0018', letterSpacing: '0.05em' }}>
              {'\u00A0'}kontaktua{'\u00A0'} {' '}
            </span>
          </a>
        </p>
        <p
          className="text-center font-bignoodle text-[22px] leading-[1.15em] text-accent"
          style={{ letterSpacing: '0.1em' }}
        >
          ZURE PROIEKTUETARAKO AURREKONTU BAT BEHAR DUZU?
        </p>
        <p
          className="text-center font-bignoodle text-[16px] leading-[1.15em] text-accent"
          style={{ letterSpacing: '0.1em' }}
        >
          JARRI ZAITEZ GUREKIN HARREMANETAN ETA ZURE ZALANTZAK ARGITUKO DITUGU
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
