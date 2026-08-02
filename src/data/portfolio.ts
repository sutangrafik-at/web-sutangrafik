import { asset } from '@/lib/assets';

export type PortfolioImage = {
  src: string;
  width: number;
  height: number;
};

const P = (n: number) => asset(`/images/portfolio/${n}.jpg`);

export const PORTFOLIO_IMAGES: PortfolioImage[] = [
  { src: P(1), width: 1664, height: 1480 },
  { src: P(2), width: 5906, height: 8268 },
  { src: P(3), width: 3508, height: 4961 },
  { src: P(4), width: 1800, height: 1800 },
  { src: P(5), width: 6000, height: 5600 },
  { src: P(6), width: 2480, height: 2480 },
  { src: P(7), width: 2906, height: 1488 },
  { src: P(8), width: 3508, height: 4961 },
  { src: P(9), width: 3000, height: 3000 },
  { src: P(10), width: 1200, height: 1200 },
  { src: P(11), width: 1080, height: 1350 },
  { src: P(12), width: 960, height: 880 },
  { src: P(13), width: 1200, height: 1200 },
  { src: P(14), width: 3508, height: 3474 },
  { src: P(15), width: 1630, height: 1600 },
  { src: P(16), width: 2600, height: 3460 },
  { src: P(17), width: 3543, height: 3543 },
  { src: P(18), width: 5906, height: 8268 },
  { src: P(19), width: 3898, height: 4746 },
  { src: P(20), width: 3508, height: 4961 },
  { src: P(21), width: 4724, height: 4724 },
  { src: P(22), width: 3508, height: 4961 },
  { src: P(23), width: 594, height: 594 },
  { src: P(24), width: 2300, height: 2152 },
  { src: P(25), width: 3508, height: 4961 },
  { src: P(26), width: 1630, height: 1600 },
  { src: P(27), width: 5846, height: 8268 },
  { src: P(28), width: 2726, height: 1614 },
  { src: P(29), width: 3286, height: 3315 },
  { src: P(30), width: 3682, height: 1700 },
  { src: P(31), width: 533, height: 479 },
  { src: P(32), width: 3508, height: 4961 },
  { src: P(33), width: 3000, height: 2500 },
  { src: P(34), width: 6000, height: 5600 },
  { src: P(35), width: 2377, height: 2377 },
];
