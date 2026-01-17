// Ambil URL dari file .env.local yang tadi kita buat
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

/**
 * Fungsi untuk mengambil nilai terbaru
 */
export async function getBlockchainValue() {
  const res = await fetch(`${BACKEND_URL}/blockchain/value`, {
    method: "GET",
    cache: "no-store", // Agar data selalu fresh dari blockchain
  });

  if (!res.ok) return { value: 0 }; // Default jika error
  return res.json();
}

/**
 * Fungsi untuk mengambil data event
 */
export async function getBlockchainEvents() {
  const res = await fetch(`${BACKEND_URL}/blockchain/events`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) return []; // Balikan array kosong jika error
  return res.json();
}