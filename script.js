// VANDUSKY WEBSITE SETTINGS
// Ganti nomor ini dengan nomor WhatsApp brand kamu, format internasional tanpa +, spasi, atau tanda strip.
// Contoh Indonesia: 6281234567890
const WHATSAPP_NUMBER = "6285119733171";

function openWhatsApp(product, price) {
  if (WHATSAPP_NUMBER.includes("X") || WHATSAPP_NUMBER.length < 10) {
    showToast("Nomor WhatsApp belum diatur. Buka script.js lalu ganti WHATSAPP_NUMBER.");
    return;
  }
  const message = `Halo VANDUSKY! Saya tertarik order:\\n\\nProduk: ${product}\\nHarga: ${price}\\nUkuran: (isi ukuran)\\nJumlah: (isi jumlah)\\n\\nApakah masih tersedia?`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
}
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 3600);
}
document.querySelectorAll(".order-button").forEach(button => {
  button.addEventListener("click", () => openWhatsApp(button.dataset.product, button.dataset.price));
});
document.getElementById("contactButton").addEventListener("click", () => {
  if (WHATSAPP_NUMBER.includes("X") || WHATSAPP_NUMBER.length < 10) {
    showToast("Atur nomor WhatsApp brand kamu di file script.js.");
  } else {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Halo VANDUSKY, saya ingin bertanya tentang koleksi.")}`, "_blank", "noopener");
  }
});
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("navMenu").classList.toggle("open");
});
document.querySelectorAll("#navMenu a").forEach(link => link.addEventListener("click", () => document.getElementById("navMenu").classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();
