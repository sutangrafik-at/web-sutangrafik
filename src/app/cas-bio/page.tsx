import type { Metadata } from 'next';
import Image from 'next/image';
import CtaRow from '@/components/CtaRow';
import HeaderNav from '@/components/HeaderNav';

const DESCRIPTION = `DISEÑO GRÁFICO - IMAGEN - MAQUETACIÓN - MERCHANDISING

Soluciones gráficas adaptadas a tus necesidades

Logotipos / Imagen corporativa / Carteles / Flyers / Merchandising / Camisetas / Discos / Editorial / Ilustración digital / Fotomontaje`;

export const metadata: Metadata = {
  title: 'BIO | Sutan Grafik',
  description: DESCRIPTION,
  openGraph: {
    title: 'BIO | SUTAN GRAFIK cas',
    description: DESCRIPTION,
  },
  alternates: {
    canonical: '/cas-bio',
  },
};

const PARAGRAPH_CLASSES_13 =
  'text-justify font-[var(--font-worksans)] text-[13px] font-bold leading-[1.14em] text-accent';
const PARAGRAPH_CLASSES_14 =
  'text-justify font-[var(--font-worksans)] text-[14px] font-bold leading-[1.14em] text-accent';

export default function CasBioPage() {
  return (
    <div className="w-full max-w-[980px] md:mx-auto">
      <HeaderNav active="bio" lang="es" />
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
            <p className={PARAGRAPH_CLASSES_13}>
              Tras varios años trabajando como Freelance y en agencias de diseño y publicidad, ha
              nacido Sutan Grafik.
            </p>
            <p className={PARAGRAPH_CLASSES_13}>?</p>
            <p className={PARAGRAPH_CLASSES_13}>
              Se realizan trabajos de diseño para empresas, colectivos, bandas musicales,
              agrupaciones culturales y otras entidades, desde la perspectiva y la realidad de cada
              uno, creamos soluciones gráficas adaptadas a tus necesidades.
            </p>
            <p className={PARAGRAPH_CLASSES_13}>&nbsp;</p>
            <p className={PARAGRAPH_CLASSES_14}>
              Ofrecemos un servicio integral, encargándonos del proceso de ideación, creación y
              gestión de los productos gráficos que necesites, con un asesoramiento personalizado,
              basado en nuestra experiencia. Es decir, nos encargaremos de todo hasta que los
              productos gráficos requeridos lleguen a tu casa.
            </p>
            <p className={PARAGRAPH_CLASSES_14}>?</p>
            <p className="font-bignoodle text-[18px] leading-[1.14em] text-accent" style={{ letterSpacing: '0.35em' }}>
              ALEX TURRILLAS
            </p>
            <p className="text-[16px] leading-[0.5em]">&nbsp;</p>
            <p className={PARAGRAPH_CLASSES_13}>
              Nacido el 23 de septiembre de 1992 en Deba (Gipuzkoa). Después de graduarme en Ciencia
              Política y Gestión Pública (UPV/EHU Leioa) decidí dedicarme a lo que me correspondía
              por vocación; el diseño gráfico. Así que me decidí por estudiar un Ciclo de grado
              superior de Diseño y edición de publicaciones impresas y multimedia (CIFP Mendizabala
              Vitoria-Gasteiz).
            </p>
            <p className={PARAGRAPH_CLASSES_13}>&nbsp;</p>
            <p className={PARAGRAPH_CLASSES_13}>Apasionado de la historia, de la música y de las artes en general.</p>
            <p className={PARAGRAPH_CLASSES_14}>.</p>
            <p className="font-bignoodle text-[21px] leading-[1.14em] text-accent" style={{ letterSpacing: '0.35em' }}>
              ?
            </p>
            <p className="text-center text-[16px] font-bold leading-[1.14em] text-accent">?</p>
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
            className="absolute left-[655px] top-[201px] h-[204px] w-[213px]"
          />
        </div>
      </div>
      <CtaRow
        className="mb-[44px]"
        items={[
          { label: 'TRABAJOS REALIZAdos', href: '/cas-grafik' },
          { label: 'PEDIR PRESUPUESTO', href: '/cas-contacto' },
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
        <p className={PARAGRAPH_CLASSES_13}>
          Tras varios años trabajando como Freelance y en agencias de diseño y publicidad, ha nacido
          Sutan Grafik.
        </p>
        <p className={PARAGRAPH_CLASSES_13}>
          Se realizan trabajos de diseño para empresas, colectivos, bandas musicales, agrupaciones
          culturales y otras entidades, desde la perspectiva y la realidad de cada uno, creamos
          soluciones gráficas adaptadas a tus necesidades.
        </p>
        <p className={PARAGRAPH_CLASSES_14}>
          Ofrecemos un servicio integral, encargándonos del proceso de ideación, creación y gestión
          de los productos gráficos que necesites, con un asesoramiento personalizado, basado en
          nuestra experiencia. Es decir, nos encargaremos de todo hasta que los productos gráficos
          requeridos lleguen a tu casa.
        </p>
        <p className="font-bignoodle text-[18px] leading-normal text-accent" style={{ letterSpacing: '0.35em' }}>
          ALEX TURRILLAS
        </p>
        <p className={PARAGRAPH_CLASSES_13}>
          Nacido el 23 de septiembre de 1992 en Deba (Gipuzkoa). Después de graduarme en Ciencia
          Política y Gestión Pública (UPV/EHU Leioa) decidí dedicarme a lo que me correspondía por
          vocación; el diseño gráfico. Así que me decidí por estudiar un Ciclo de grado superior de
          Diseño y edición de publicaciones impresas y multimedia (CIFP Mendizabala Vitoria-Gasteiz).
        </p>
        <p className={PARAGRAPH_CLASSES_13}>Apasionado de la historia, de la música y de las artes en general.</p>
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
