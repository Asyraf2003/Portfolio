export function asset(path: string) {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;         
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}
