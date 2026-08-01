import type { Metadata } from 'next';
import Image from 'next/image';
import CtaRow from '@/components/CtaRow';
import HeaderNav from '@/components/HeaderNav';

export const metadata: Metadata = {
  title: 'BIO | Sutan Grafik | Diseinu grafikoa',
  openGraph: {
    title: 'BIO | SUTAN GRAFIK eus',
  },
  alternates: {
    canonical: '/bio',
  },
};

const PARAGRAPH_CLASSES =
  'text-justify font-[var(--font-worksans)] text-[14px] font-bold leading-[1.14em] text-accent';

export default function BioPage() {
  return (
    <div className="w-full max-w-[980px] md:mx-auto md:-mt-[25px]">
      <HeaderNav active="bio" lang="eu" />
      <div className="hidden md:block">
        <div className="mb-[-6px] mt-[29px] ml-[-43px] w-[310px]">
          <p className="text-center font-bignoodle text-[53px] leading-[1.5em] text-white">
            <span style={{ backgroundColor: '#DD0018', letterSpacing: '0.05em' }}>
              {'\u00A0'}bio{'\u00A0'} {' '}
            </span>
          </p>
        </div>
        <div className="relative ml-[78px] min-h-[465px] w-[622px]">
          <div className="pb-[20px] pt-[11px]">
            <p className="text-[30px] leading-[1.14em] text-accent">
              <span className="font-thirdrail" style={{ letterSpacing: '0.2em' }}>
                SUTAN{'\u00A0'}{'\u00A0'}{'\u00A0'} {' '}
              </span>
              <span className="font-bignoodle text-[29px]" style={{ letterSpacing: '0.35em' }}>
                GRAFIK
              </span>
            </p>
            <p className="text-[16px] leading-[0.5em]">&nbsp;</p>
            <p className={PARAGRAPH_CLASSES}>
              Hainbat urtez freelance moduan zein diseinu agentzietan lanean ibili ondoren sorturiko
              proiektua.
            </p>
            <p className={PARAGRAPH_CLASSES}>&nbsp;</p>
            <p className={PARAGRAPH_CLASSES}>
              Enpresa, kolektibo, musika talde, kultur elkarte eta bestelako eragileentzako diseinu
              lanak burutzen dira, bakoitzaren errealitatearen perspektibatik, zure beharrizanen
              araberako soluzio grafikoak sortuz.
            </p>
            <p className={PARAGRAPH_CLASSES}>&nbsp;</p>
            <p className={PARAGRAPH_CLASSES}>
              Zerbitzu integrala eskaintzen dugu. Behar dituzun produktu grafikoen ideazio, sorkuntza
              eta gestio prozesu guztiaz arduratzen gara, gure esperientzian oinarritutako aholkularitza
              pertsonalizatua eskainiz. Hau da, eskatutako produktu grafikoak zure etxera iritsi
              bitarteko lan guztiak gure gain hartuko ditugu.
            </p>
            <p className={PARAGRAPH_CLASSES}>&nbsp;</p>
            <p className={PARAGRAPH_CLASSES}>&nbsp;</p>
            <p className="font-bignoodle text-[18px] leading-[1.14em] text-accent" style={{ letterSpacing: '0.35em' }}>
              ALEX TURRILLAS
            </p>
            <p className="text-[16px] leading-[0.5em]">&nbsp;</p>
            <p className={PARAGRAPH_CLASSES}>
              Deban (Gipuzkoa) jaio nintzen 1992ko irailaren 23an. Politika Zientzia eta Administrazio
              Publikoaren Kudeaketa (UPV/EHU Leioa) ikasi eta gero nire bokazioa zen diseinu grafikoan
              murgiltzea erabaki nuen. Ondorioz, Argitalpen Inprimatuen eta Multimedia Argitalpenen
              Diseinu eta Edizioko goi mailako zikloa ikasi nuen (LHII Mendizabala Gasteiz).
            </p>
            <p className={PARAGRAPH_CLASSES}>&nbsp;</p>
            <p className={PARAGRAPH_CLASSES}>Historian, musikan eta arteetan zaletua.</p>
            <p className="font-bignoodle text-[21px] leading-[1.14em] text-accent" style={{ letterSpacing: '0.35em' }}>
              &nbsp;
            </p>
            <p className="text-center text-[16px] font-bold leading-[1.14em] text-accent">&nbsp;</p>
          </div>
          <Image
            src="/images/bio-logo.png"
            alt="Logotipo pequeño de Sutan Grafik"
            width={41}
            height={48}
            className="absolute left-[119px] top-0 h-[48px] w-[41px]"
          />
          <Image
            src="/images/logo.png"
            alt="Sutan Grafik logo"
            width={204}
            height={153}
            className="absolute left-[660px] top-[48px] h-[153px] w-[204px]"
          />
          <Image
            src="/images/bio-image.png"
            alt="Ilustración de Sutan Grafik"
            width={213}
            height={204}
            className="absolute left-[655px] top-[207px] h-[204px] w-[213px]"
          />
        </div>
      </div>
      <CtaRow
        className="mb-[41px]"
        items={[
          { label: 'EGINDAKO LANAK IKUSI', href: '/grafik' },
          { label: 'aurrekontua eskatu', href: '/kontaktua' },
        ]}
      />
      <div className="flex flex-col items-center gap-6 px-4 py-8 md:hidden">
        <p className="text-center font-bignoodle text-[36px] leading-[1.5em] text-white">
          <span style={{ backgroundColor: '#DD0018', letterSpacing: '0.05em' }}>
            {'\u00A0'}bio{'\u00A0'} {' '}
          </span>
        </p>
        <p className="text-center text-[24px] leading-normal text-accent">
          <span className="font-thirdrail" style={{ letterSpacing: '0.2em' }}>
            SUTAN{'\u00A0'}{'\u00A0'}{'\u00A0'} {' '}
          </span>
          <span className="font-bignoodle text-[23px]" style={{ letterSpacing: '0.35em' }}>
            GRAFIK
          </span>
        </p>
        <p className={PARAGRAPH_CLASSES}>
          Hainbat urtez freelance moduan zein diseinu agentzietan lanean ibili ondoren sorturiko
          proiektua.
        </p>
        <p className={PARAGRAPH_CLASSES}>
          Enpresa, kolektibo, musika talde, kultur elkarte eta bestelako eragileentzako diseinu lanak
          burutzen dira, bakoitzaren errealitatearen perspektibatik, zure beharrizanen araberako
          soluzio grafikoak sortuz.
        </p>
        <p className={PARAGRAPH_CLASSES}>
          Zerbitzu integrala eskaintzen dugu. Behar dituzun produktu grafikoen ideazio, sorkuntza eta
          gestio prozesu guztiaz arduratzen gara, gure esperientzian oinarritutako aholkularitza
          pertsonalizatua eskainiz. Hau da, eskatutako produktu grafikoak zure etxera iritsi bitarteko
          lan guztiak gure gain hartuko ditugu.
        </p>
        <p className="font-bignoodle text-[18px] leading-normal text-accent" style={{ letterSpacing: '0.35em' }}>
          ALEX TURRILLAS
        </p>
        <p className={PARAGRAPH_CLASSES}>
          Deban (Gipuzkoa) jaio nintzen 1992ko irailaren 23an. Politika Zientzia eta Administrazio
          Publikoaren Kudeaketa (UPV/EHU Leioa) ikasi eta gero nire bokazioa zen diseinu grafikoan
          murgiltzea erabaki nuen. Ondorioz, Argitalpen Inprimatuen eta Multimedia Argitalpenen
          Diseinu eta Edizioko goi mailako zikloa ikasi nuen (LHII Mendizabala Gasteiz).
        </p>
        <p className={PARAGRAPH_CLASSES}>Historian, musikan eta arteetan zaletua.</p>
        <Image
          src="/images/bio-logo.png"
          alt="Logotipo pequeño de Sutan Grafik"
          width={41}
          height={48}
          className="h-[48px] w-[41px]"
        />
        <Image
          src="/images/logo.png"
          alt="Sutan Grafik logo"
          width={204}
          height={153}
          className="h-auto w-full max-w-[310px]"
        />
        <Image
          src="/images/bio-image.png"
          alt="Ilustración de Sutan Grafik"
          width={213}
          height={204}
          className="h-auto w-full max-w-[310px]"
        />
      </div>
    </div>
  );
}
