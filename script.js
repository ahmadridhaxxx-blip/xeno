// Tombol "Jelajahi Lebih Lanjut" auto scroll ke bagian sejarah
document.getElementById("exploreBtn").addEventListener("click", () => {
  document.getElementById("history").scrollIntoView({ behavior: "smooth" });
});

// Efek perubahan warna navbar saat di-scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(0, 0, 0, 0.8)";
  } else {
    header.style.background = "rgba(0, 0, 0, 0.5)";
  }
});
