document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("ctaBtn").addEventListener("click", () => {
    window.open("https://link-panduan-kamu.com", "_blank");
  });

  const track = document.getElementById("liveTrack");

  const names = [
    "ar***k","di***a","ah***n","yu***i","re***o",
    "mu***d","fa***n","an***i","ir***a","sa***h"
  ];

  const messages = [
    "Alhamdulillah, hutang 200jt yang terasa mustahil akhirnya lunas.",
    "Saya ikuti panduannya pelan-pelan, hasilnya nyata.",
    "Akhirnya bisa tidur tenang tanpa beban hutang.",
    "Awalnya ragu, tapi karena halal saya jalani. Allah mudahkan.",
    "Langkahnya jelas, bukan janji kosong."
  ];

  function randomTime() {
    const sec = Math.floor(Math.random() * 90) + 10;
    return `${sec} detik lalu`;
  }

  function createTestimoni() {
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

  for (let i = 0; i < 4; i++) createTestimoni();
  setInterval(createTestimoni, 4000);
});
