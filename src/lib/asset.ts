export function asset(path: string) {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;

  // Tentukan BASE_URL. Kita gunakan BASE_URL dari Vite sebagai default.
  const base =
    (typeof import.meta !== "undefined" &&
      (import.meta as any)?.env?.BASE_URL) ||
    "/";

  // Periksa apakah BASE_URL adalah root ('/') atau subpath ('/Portfolio/')
  // Jika BASE_URL adalah '/Portfolio/' DAN path yang dipanggil masih relatif terhadap root ('/assets/...')
  // kita paksa penambahan '/Portfolio/' di depan.

  let finalPath = String(path).replace(/^\/+/, ""); // Hapus '/' awal dari path aset

  // Kita hardcode prefix '/Portfolio/' untuk memastikan aset dimuat dengan benar di GH Pages
  // Karena semua aset yang bermasalah berada di subfolder 'assets'
  if (base.includes("/Portfolio") && finalPath.startsWith("assets/")) {
      // Jika BASE_URL mengandung /Portfolio, kita pastikan path hasilnya adalah /Portfolio/assets/...
      return `/Portfolio/${finalPath}`;
  }
  
  // Untuk kasus lokal (base='/') atau URL eksternal, kita biarkan logic awal
  return `${base}${finalPath}`;
}