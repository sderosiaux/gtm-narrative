'use client';

import { ReactNode } from 'react';
import { AppImage } from './AppImage';
import { AnimatedSection } from './AnimatedSection';

interface ComicPanelProps {
  children?: ReactNode;
  visual?: string;
  imageSrc?: string;
  imageAlt?: string;
  visualBg?: string;
  className?: string;
  delay?: number;
  layout?: 'vertical' | 'horizontal' | 'visual-only';
}

function VisualContent({
  imageSrc,
  imageAlt,
  visual,
  visualBg
}: {
  imageSrc?: string;
  imageAlt?: string;
  visual?: string;
  visualBg: string;
}) {
  if (imageSrc) {
    return (
      <div className="relative aspect-[16/10] w-full bg-white dark:bg-neutral-900">
        <AppImage
          src={imageSrc}
          alt={imageAlt || 'Panel illustration'}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div className={`aspect-video ${visualBg} flex items-center justify-center p-8`}>
      {visual && (
        <p className="text-neutral-500 dark:text-neutral-400 text-center italic">
          {visual}
        </p>
      )}
    </div>
  );
}

export function ComicPanel({
  children,
  visual,
  imageSrc,
  imageAlt,
  visualBg = 'bg-neutral-100 dark:bg-neutral-800',
  className = '',
  delay = 0,
  layout = 'vertical',
}: ComicPanelProps) {
  if (layout === 'visual-only') {
    return (
      <AnimatedSection delay={delay}>
        <div className={`rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-800 ${className}`}>
          <VisualContent imageSrc={imageSrc} imageAlt={imageAlt} visual={visual} visualBg={visualBg} />
        </div>
      </AnimatedSection>
    );
  }

  if (layout === 'horizontal') {
    return (
      <AnimatedSection delay={delay}>
        <div className={`grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-800 ${className}`}>
          <div className={`${imageSrc ? 'bg-white dark:bg-neutral-900' : `aspect-square md:aspect-auto ${visualBg}`} flex items-center justify-center ${imageSrc ? '' : 'p-8'}`}>
            {imageSrc ? (
              <div className="relative aspect-[4/3] w-full">
                <AppImage
                  src={imageSrc}
                  alt={imageAlt || 'Panel illustration'}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ) : visual ? (
              <p className="text-neutral-500 dark:text-neutral-400 text-center italic">
                {visual}
              </p>
            ) : null}
          </div>
          <div className="bg-white dark:bg-neutral-900 p-8 flex flex-col justify-center">
            {children}
          </div>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection delay={delay}>
      <div className={`rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-800 ${className}`}>
        {(visual || imageSrc) && (
          <VisualContent imageSrc={imageSrc} imageAlt={imageAlt} visual={visual} visualBg={visualBg} />
        )}
        <div className="bg-white dark:bg-neutral-900 p-8">
          {children}
        </div>
      </div>
    </AnimatedSection>
  );
}
