'use client';

import Image, { ImageProps } from 'next/image';

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/gtm-narrative' : '';

interface AppImageProps extends Omit<ImageProps, 'src'> {
  src: string;
}

export function AppImage({ src, ...props }: AppImageProps) {
  const imageSrc = src.startsWith('/') ? `${BASE_PATH}${src}` : src;
  return <Image {...props} src={imageSrc} />;
}
