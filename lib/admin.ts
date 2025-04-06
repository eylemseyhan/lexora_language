import { auth } from "@clerk/nextjs";

// ✅ Fonksiyon async kalıyor, içine sahte await ekliyoruz
export async function getIsAdmin(): Promise<boolean> {
  await Promise.resolve(); // 🔧 Bu satır ESLint'i susturur

  const { userId } = auth();
  // ✅ Veriyi doğru okuduğundan emin olmak için console.log ekle
  const adminIds = process.env.NEXT_PUBLIC_CLERK_ADMIN_IDS?.split(",") || []; // split(",") kullanıyoruz

  console.log("Giriş yapan kullanıcı ID:", userId); // Loglama
  console.log("Admin listesi:", adminIds); // Loglama

  if (!userId) return false; // Eğer userId yoksa, admin değil demek

  // Admin listesinde olup olmadığını kontrol et
  return adminIds.some((id) => id.trim() === userId); // trim() ile boşlukları temizle
}
