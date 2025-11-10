export function asset(path: string) {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;

  // Hapus garis miring berlebihan dari path input
  const cleanPath = String(path).replace(/^\/+/, ""); 
  
  // Tentukan Base URL
  let basePrefix = '/'; // Default untuk local development (Vite dev server)

  // DETEKSI HARDCODE: Jika bukan development lokal, 
  // asumsikan ini adalah deployment GitHub Pages di sub-directory '/Portfolio/'
  // Kita cek keberadaan 'PROD' env variable, yang diatur oleh Vite saat build.
  if (import.meta.env.PROD) {
      // Hardcode Base URL untuk GitHub Pages (GANTIKAN DENGAN NAMA REPO ANDA JIKA BEDA)
      basePrefix = '/Portfolio/';
  }

  // Gabungkan Base dengan path aset.
  // Hasil yang diharapkan di Production: /Portfolio/assets/sky.jpg
  return `${basePrefix}${cleanPath}`;
}