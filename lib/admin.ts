export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export function verifyAdminToken(token: string | null | undefined): boolean {
  if (!token) return false;
  return token === ADMIN_PASSWORD;
}







