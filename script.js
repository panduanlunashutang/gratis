document.addEventListener("DOMContentLoaded", () => {

  const ctaBtn = document.getElementById("ctaBtn");
  ctaBtn.addEventListener("click", () => {
    window.open("https://contoh-link-kamu.com", "_blank");
  });

  const track = document.getElementById("liveTrack");

  const names = [
    "ar***k","di***a","ah***n","yu***i","re***o",
    "mu***d","fa***n","an***i","ir***a","sa***h"
  ];

  const messages = [
    "Alhamdulillah, hutang 200jt yang terasa mustahil akhirnya lunas.",
    "Saya cuma ikuti panduannya pelan-pelan, hasilnya nyata.",
    "Akhirnya bisa tidur tenang tanpa dikejar hutang.",
    "Awalnya ragu, tapi karena halal saya coba. Allah mudahkan.",
    "Bukan janji, tapi langkahnya jelas dan masuk akal."
  ];

  function randomTime() {
    const t = Math.floor(Math.random() * 90) + 10;
    return `${t} detik lalu`;
  }

  function createTesti() {
    const item = document.createElement("div");
    item.className = "live-item";
    item.innerHTML = `
      <strong>🟢 ${names[Math.floor(Math.random()*names.length)]}</strong>
      <p>“${messages[Math.floor(Math.random()*messages.length)]}”</p>
      <div class="live-meta">✔ Terverifikasi • ${randomTime()}</div>
    `;
    track.prepend(item);

    if (track.children.length > 6) {
      track.lastChild.remove();
    }
  }

  for (let i = 0; i < 4; i++) createTesti();
  setInterval(createTesti, 4000);
});
