import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

const CAS_DESCRIPTION =
  'DISEÑO GRÁFICO - IMAGEN - MAQUETACIÓN - MERCHANDISING\n\nSoluciones gráficas adaptadas a tus necesidades\n\nLogotipos / Imagen corporativa / Carteles / Flyers / Merchandising / Camisetas / Discos / Editorial / Ilustración digital / Fotomontaje';

export const metadata: Metadata = {
  title: 'Sutan Grafik | Diseño gráfico',
  description: CAS_DESCRIPTION,
  openGraph: {
    title: 'SUTAN GRAFIK diseño gráfico',
    description: CAS_DESCRIPTION,
  },
  alternates: {
    canonical: '/cas',
  },
};

export default function CasHome() {
  return <HomeContent lang="es" />;
}
