export function asset(path: string) {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;

  const base =
    (typeof import.meta !== "undefined" &&
      (import.meta as any)?.env?.BASE_URL) ||
    "/";

  return `${base}${String(path).replace(/^\/+/, "")}`;
}
