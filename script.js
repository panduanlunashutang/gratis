document.addEventListener("DOMContentLoaded", () => {

  /* CTA */
  let clickCount = 0;
  const cta = document.getElementById("ctaBtn");
  const modal = document.getElementById("modal");
  const closeModal = document.querySelector(".close-modal");

  cta.onclick = () => {
    clickCount++;
    clickCount === 1
      ? window.open("https://s.shopee.co.id/3B1fet28qi","_blank")
      : modal.style.display = "flex";
  };
  closeModal.onclick = () => modal.style.display = "none";

  /* DATA */
  const track = document.getElementById("liveTrack");
  const counter = document.getElementById("liveCounter");

  const names = [
    "an***i","ar***k","ah***n","ba***i","da***n","di***a","fa***n","ha***z",
    "ir***a","ka***m","la***a","mu***d","na***a","ra***n","re***o","sa***h",
    "ta***i","yu***i","za***a","fi***r","de***i","no***i","li***a","nu***a"
  ];

  const messages = [
    "Alhamdulillah hutang 200 juta akhirnya lunas.",
    "Saya jalani pelan-pelan dan hasilnya nyata.",
    "Yang bikin tenang karena caranya halal.",
    "Bukan instan tapi jelas dan masuk akal.",
    "Dulu tiap hari kepikiran hutang.",
    "Sekarang tidur jauh lebih nyenyak.",
    "Awalnya ragu tapi saya coba dulu.",
    "MasyaAllah rezeki datang dari arah tak disangka.",
    "Saya ikutin step by step tanpa paksaan.",
    "Bukan cuma lunas, mental juga tenang.",
    "Yang penting konsisten dan disiplin.",
    "Pelan tapi pasti, alhamdulillah.",
    "Hutang besar berkurang satu per satu.",
    "Saya masih kerja sambil jalanin ini.",
    "Tidak ada yang aneh-aneh."
  ];

  const cities = [
    "Jakarta","Bandung","Surabaya","Bekasi","Depok","Bogor","Tangerang",
    "Semarang","Yogyakarta","Solo","Malang","Medan","Palembang",
    "Lampung","Makassar","Balikpapan","Samarinda","Banjarmasin"
  ];

  /* AI AVATAR (INDONESIAN FACE STYLE) */
  function avatarUrl() {
    const gender = Math.random() > 0.5 ? "men" : "women";
    const id = Math.floor(Math.random() * 70) + 1;
    return `https://randomuser.me/api/portraits/${gender}/${id}.jpg`;
  }

  function typeText(el, text, speed = 28) {
    let i = 0;
    el.textContent = "";
    const typing = setInterval(() => {
      el.textContent += text.charAt(i);
      i++;
      if (i >= text.length) clearInterval(typing);
    }, speed);
  }

  function addTestimoni() {
    const item = document.createElement("div");
    item.className = "live-item";

    const name = names[Math.floor(Math.random()*names.length)];
    const msg = messages[Math.floor(Math.random()*messages.length)];
    const city = cities[Math.floor(Math.random()*cities.length)];
    const time = Math.floor(Math.random()*9)+1;

    item.innerHTML = `
      <img class="avatar-img" src="${avatarUrl()}" alt="avatar">
      <div class="live-content">
        <strong>${name}</strong>
        <p></p>
        <small>${city} • ${time} menit lalu</small>
      </div>
    `;

    track.prepend(item);
    typeText(item.querySelector("p"), msg);

    if (track.children.length > 7) track.lastChild.remove();
  }

  setInterval(addTestimoni, 2600);

  /* LIVE COUNTER */
  let liveCount = 128;
  setInterval(() => {
    liveCount += Math.floor(Math.random()*3) + 1;
    counter.textContent = liveCount;
  }, 3500);

});
