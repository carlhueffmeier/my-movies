export function getImgUri(path: string): string {
  if (!path) return '';
  return `https://image.tmdb.org/t/p/w300${path}`;
}
