export function asset(path: string) {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;

  const cleanPath = String(path).replace(/^\/+/, ""); 
  
  let basePrefix = '/'; // Default untuk local development (Vite dev server)

  if (import.meta.env.PROD) {
      // Hardcode Base URL untuk GitHub Pages (GANTIKAN DENGAN NAMA REPO ANDA JIKA BEDA)
      basePrefix = '/Portfolio/';
  }

  return `${basePrefix}${cleanPath}`;
}