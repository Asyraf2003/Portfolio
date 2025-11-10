export function asset(path: string) {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;

  // 1. Dapatkan BASE_URL dari Vite.
  const viteBase =
    (typeof import.meta !== "undefined" &&
      (import.meta as any)?.env?.BASE_URL) ||
    "/";
    
  // 2. Hapus garis miring berlebihan dari path input.
  const cleanPath = String(path).replace(/^\/+/, ""); 

  // 3. Gabungkan path.
  const finalPath = `${viteBase}${cleanPath}`;
  
  // LOGGING BARU: Periksa nilai variabel
  console.log("--- DEBUG ASSET ---");
  console.log(`Input Path: ${path}`);
  console.log(`Vite BASE_URL: ${viteBase}`);
  console.log(`Clean Path: ${cleanPath}`);
  console.log(`FINAL URL: ${finalPath}`);
  console.log("-------------------");

  return finalPath;
}