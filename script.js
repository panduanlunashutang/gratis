document.addEventListener("DOMContentLoaded", () => {

  let clickCount = 0;
  const cta = document.getElementById("ctaBtn");
  const modal = document.getElementById("modal");
  const closeModal = document.querySelector(".close-modal");
  const track = document.getElementById("liveTrack");
  const counter = document.getElementById("liveCounter");

  cta.onclick = () => {
    clickCount++;
    clickCount === 1
      ? window.open("https://s.shopee.co.id/3B1fet28qi","_blank")
      : (modal.style.display="flex", confetti());
  };

  closeModal.onclick = () => modal.style.display="none";

  const names = [
    "Andi","Rahmat","Siti","Nur","Agus","Rina","Fajar","Dewi","Budi","Yanti",
    "Rizki","Lina","Hendra","Sri","Eko","Aisyah","Ilham","Fitri","Wawan","Ningsih",
    "Dedi","Maya","Arif","Putri","Bayu","Intan","Ridwan","Kartika","Irfan","Salma",
    "Joko","Ratna","Yusuf","Aminah","Hafiz","Melati","Fauzan","Nabila","Wahyu","Desi"
  ];

  const messages = [
    "Alhamdulillah ikut panduan, hutang pelan-pelan beres.",
    "Awalnya ragu tapi ternyata masuk akal.",
    "Tidak instan tapi bikin tenang.",
    "Rezeki datang dari arah tak disangka.",
    "Mental jauh lebih ringan sekarang.",
    "Saya jalani sambil kerja.",
    "Lebih terarah dan tidak panik.",
    "Bukan sulap tapi realistis.",
    "Pelan tapi konsisten.",
    "Hutang berkurang satu per satu."
  ];

  const cities = ["Jakarta","Bandung","Surabaya","Bekasi","Depok","Bogor","Semarang","Malang"];

  function avatar() {
    return Math.random() > .5 ? "👨‍💼" : "👩‍💼";
  }

  function timeLabel() {
    const now = new Date();
    const today = Math.random() > 0.4;
    if (!today) now.setDate(now.getDate() - 1);
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    return `${today ? "Hari ini" : "Kemarin"} ${h}:${m} WIB`;
  }

  function addTestimoni() {
    const div = document.createElement("div");
    div.className = "live-item";
    div.innerHTML = `
      <div class="avatar-icon">${avatar()}</div>
      <div class="live-content">
        <strong>${names[Math.floor(Math.random()*names.length)]}</strong>
        <p>${messages[Math.floor(Math.random()*messages.length)]}</p>
        <small>${cities[Math.floor(Math.random()*cities.length)]} • ${timeLabel()}</small>
      </div>`;
    track.prepend(div);
    if (track.children.length > 8) track.lastChild.remove();
  }

  setInterval(addTestimoni, 2600);

  let liveCount = 128;
  setInterval(() => {
    liveCount += Math.floor(Math.random()*3) + 1;
    counter.textContent = liveCount;
  }, 3500);

  function confetti() {
    for (let i = 0; i < 40; i++) {
      const c = document.createElement("div");
      c.className = "confetti";
      c.style.left = Math.random() * 100 + "vw";
      c.style.background =
        ["#f44336","#ffeb3b","#4caf50","#2196f3","#e91e63"]
        [Math.floor(Math.random()*5)];
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 3000);
    }
  }

});
