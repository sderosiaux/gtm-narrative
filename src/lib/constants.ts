export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/gtm-narrative' : '';

export function getImagePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
