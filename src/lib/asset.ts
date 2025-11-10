export function asset(path: string) {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;

  // BASE_URL sudah dijamin dikenali oleh TS sekarang
  const base = import.meta.env.BASE_URL;
    
  // Pastikan path input tidak memiliki slash di depan untuk menghindari //
  const cleanPath = String(path).replace(/^\/+/, ""); 

  // Hasil: /Portfolio/assets/mountain-3.png
  return `${base}${cleanPath}`;
}