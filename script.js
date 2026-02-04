document.addEventListener("DOMContentLoaded", () => {

  /* ================= CTA ================= */
  let clickCount = 0;
  const cta = document.getElementById("ctaBtn");
  const modal = document.getElementById("modal");
  const closeModal = document.querySelector(".close-modal");

  cta.addEventListener("click", () => {
    clickCount++;
    if (clickCount === 1) {
      window.open("https://s.shopee.co.id/3B1fet28qi", "_blank");
    } else {
      modal.style.display = "flex";
    }
  });

  closeModal.onclick = () => modal.style.display = "none";

  /* ================= TESTIMONI LIVE ================= */
  const track = document.getElementById("liveTrack");
  const counter = document.getElementById("liveCounter");

  /* Nama disensor natural */
  const names = [
    "ar***k","di***a","ah***n","yu***i","re***o","mu***d","fa***n",
    "an***i","ir***a","sa***h","ha***z","ra***n","de***i","nu***a",
    "li***a","ad***n","fi***r","za***a","no***i","ka***m"
  ];

  /* Pesan super natural & variatif */
  const messages = [
    "Alhamdulillah, hutang 180jt akhirnya bisa lunas.",
    "Awalnya skeptis, tapi ternyata pelan-pelan jalan.",
    "Yang bikin tenang karena caranya halal.",
    "Bukan instan, tapi jelas step by step.",
    "Saya ngerjain sambil kerja, masih masuk akal.",
    "Dulu tiap malam kepikiran hutang, sekarang lebih lega.",
    "Bukan cuma soal uang, mental jadi lebih tenang.",
    "Saya nggak langsung percaya, tapi dicoba dulu.",
    "MasyaAllah, rezeki datang dari arah tak disangka.",
    "Hutang ratusan juta akhirnya selesai.",
    "Nggak ada paksaan, itu yang bikin nyaman.",
    "Saya ikutin pelan-pelan, hasilnya kelihatan.",
    "Buat yang lagi di posisi saya dulu, semangat.",
    "Yang penting konsisten dan nggak nyerah.",
    "Awalnya berat, tapi makin ke sini makin ringan."
  ];

  /* Kota acak */
  const cities = [
    "Jakarta","Bandung","Bekasi","Depok","Bogor",
    "Surabaya","Malang","Semarang","Yogyakarta",
    "Medan","Palembang","Lampung","Makassar","Balikpapan"
  ];

  /* Generate Testimoni */
  function addTestimoni() {
    const item = document.createElement("div");
    item.className = "live-item";

    const name = names[Math.floor(Math.random() * names.length)];
    const msg = messages[Math.floor(Math.random() * messages.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const time = Math.floor(Math.random() * 9) + 1;

    item.innerHTML = `
      <strong>${name}</strong>
      <p>${msg}</p>
      <small>${city} • ${time} menit lalu</small>
    `;

    track.prepend(item);
    if (track.children.length > 7) track.lastChild.remove();
  }

  setInterval(addTestimoni, 2300);

  /* ================= LIVE COUNTER ================= */
  let liveCount = 128;

  setInterval(() => {
    const naik = Math.floor(Math.random() * 3) + 1;
    liveCount += naik;
    counter.textContent = liveCount;
  }, 3500);

});
