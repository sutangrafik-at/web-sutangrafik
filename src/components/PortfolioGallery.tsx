'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { PORTFOLIO_IMAGES } from '@/data/portfolio';

export default function PortfolioGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrevious = useCallback(
    () => setOpenIndex((current) => (current === null ? null : (current + PORTFOLIO_IMAGES.length - 1) % PORTFOLIO_IMAGES.length)),
    [],
  );
  const showNext = useCallback(
    () => setOpenIndex((current) => (current === null ? null : (current + 1) % PORTFOLIO_IMAGES.length)),
    [],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [openIndex, close, showPrevious, showNext]);

  return (
    <>
      <div className="columns-2 gap-[5px] md:columns-3">
        {PORTFOLIO_IMAGES.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="mb-[5px] block w-full break-inside-avoid p-0"
            aria-label={`Portfolio ${index + 1}`}
          >
            <Image
              src={image.src}
              alt=""
              width={image.width}
              height={image.height}
              sizes="188px"
              className="h-auto w-full"
            />
          </button>
        ))}
      </div>
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 text-[32px] leading-none text-white"
            aria-label="Itxi"
          >
            &times;
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[48px] leading-none text-white"
            aria-label="Aurrekoa"
          >
            &#8249;
          </button>
          <Image
            src={PORTFOLIO_IMAGES[openIndex].src}
            alt=""
            width={PORTFOLIO_IMAGES[openIndex].width}
            height={PORTFOLIO_IMAGES[openIndex].height}
            sizes="90vw"
            className="max-h-[90vh] w-auto max-w-[90vw] object-contain"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[48px] leading-none text-white"
            aria-label="Hurrengoa"
          >
            &#8250;
          </button>
        </div>
      )}
    </>
  );
}
