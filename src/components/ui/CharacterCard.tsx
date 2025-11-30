'use client';

import Image from 'next/image';
import { AnimatedSection } from './AnimatedSection';

interface CharacterCardProps {
  name: string;
  role: string;
  description: string;
  color: string;
  imageSrc?: string;
  delay?: number;
}

export function CharacterCard({
  name,
  role,
  description,
  color,
  imageSrc,
  delay = 0,
}: CharacterCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {/* Character Image */}
        <div className="aspect-[4/3] relative overflow-hidden bg-white dark:bg-neutral-900">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={`${name} - ${role}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div
                className="w-32 h-32 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-lg"
                style={{ backgroundColor: color }}
              >
                {name.charAt(0)}
              </div>
            </div>
          )}
        </div>

        {/* Character Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
            {name}
          </h3>
          <p
            className="text-sm font-medium mb-3"
            style={{ color }}
          >
            {role}
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          style={{ backgroundColor: color }}
        />
      </div>
    </AnimatedSection>
  );
}
