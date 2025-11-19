export default function normalizePath(path: string) {
  return path
    .split('/')
    .map((loc) => loc.trim())
    .filter(Boolean)
    .map((item, index) =>
      item === 'admin' && index === 0 ? 'dashboard' : item,
    );
}
