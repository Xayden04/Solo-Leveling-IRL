
let xpData = {
  for: 0,
  int: 0,
  end: 0,
  total: 0,
  history: {}
};

function initHunter() {
  setTimeout(() => {
    document.getElementById("portal").style.display = "none";
    document.querySelector(".intro").style.display = "block";

    const name = localStorage.getItem("hunterName");
    if (name) {
      document.getElementById("hunter-name").textContent = name;
      document.getElementById("login-section").style.display = "none";
      document.getElementById("dashboard").style.display = "block";
      loadXP();
      checkBoss();
    }
  }, 3000);
}

function login() {
  const name = document.getElementById('name-input').value;
  if (name) {
    localStorage.setItem("hunterName", name);
    document.getElementById("hunter-name").textContent = name;
    document.getElementById("login-section").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    loadXP();
    checkBoss();
  }
}

function toggleAudio() {
  const music = document.getElementById("bg-music");
  music.muted = !music.muted;
}

function loadXP() {
  const data = JSON.parse(localStorage.getItem("xpData"));
  if (data) {
    xpData = data;
    document.getElementById("xp-total").textContent = xpData.total;
    document.getElementById("xp-for").textContent = xpData.for;
    document.getElementById("xp-int").textContent = xpData.int;
    document.getElementById("xp-end").textContent = xpData.end;
    document.getElementById("xp-progress").style.width = (xpData.total % 1000 / 10) + "%";
  }
}

function checkBoss() {
  const days = Object.values(xpData.history || {}).slice(-7);
  let greenDays = days.filter(day => day.total >= 100).length;
  const bossSection = document.getElementById("boss-section");

  if (greenDays >= 4) {
    bossSection.innerHTML = '<h3>Boss Débloqué !</h3><p>Prépare-toi à l’affronter.</p>';
    showNotification("Le boss de fin de semaine est apparu !");
  }
}

function showNotification(message) {
  const notif = document.getElementById("notification");
  notif.innerHTML = message;
  notif.classList.remove("hidden");
  setTimeout(() => {
    notif.classList.add("hidden");
  }, 3000);
}
