export function asset(path: string) {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;

  // 1. Dapatkan BASE_URL dari Vite. Ini harusnya "/Portfolio/"
  const viteBase =
    (typeof import.meta !== "undefined" &&
      (import.meta as any)?.env?.BASE_URL) ||
    "/";

  // 2. Bersihkan path input, hapus slash awal/akhir yang berlebihan.
  let cleanPath = String(path).replace(/^\/+/, "").replace(/\/+$/, "");

  // 3. Tentukan final base.
  // Untuk GitHub Pages, kita paksa base menjadi '/Portfolio/' secara eksplisit
  // jika kita tahu ini adalah build untuk sub-directory.
  let finalBase = viteBase;
  
  // Karena kita tahu BASE_URL adalah /Portfolio/ dan selalu gagal, 
  // kita hardcode nilai ini jika BASE_URL ada (berarti bukan environment lokal)
  if (viteBase.length > 1 && viteBase !== '/') {
      finalBase = '/Portfolio/'; 
  }

  // 4. Gabungkan base dengan path. Pastikan BASE_URL selalu diakhiri / (jika bukan '/')
  const basePrefix = finalBase.endsWith('/') ? finalBase : finalBase + '/';
  
  // Hapus slash di akhir path aset sebelum digabung.
  // Kita pastikan BASE_URL sudah ditangani oleh Vite, tapi kita cek lagi:
  
  if (basePrefix === '/Portfolio/' && cleanPath.startsWith('assets/')) {
      // Ini adalah skenario GitHub Pages. Pastikan hasilnya: /Portfolio/assets/...
      // Kita hapus / di awal path jika ada (agar tidak jadi //assets)
      return `${basePrefix}${cleanPath}`;
  }

  // Untuk local development (base='/') atau jika ada kasus lain
  return `${basePrefix}${cleanPath}`;
}