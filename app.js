
function login() {
  const name = document.getElementById('name-input').value;
  if (name) {
    localStorage.setItem("hunterName", name);
    document.getElementById("hunter-name").textContent = name;
    document.getElementById("login-section").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    checkBoss();
  }
}

function checkBoss() {
  const history = JSON.parse(localStorage.getItem("xpData")) || {};
  const days = history.history ? Object.values(history.history).slice(-7) : [];
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
  notif.classList.add("show");
  setTimeout(() => {
    notif.classList.remove("show");
  }, 3000);
}

window.onload = () => {
  const name = localStorage.getItem("hunterName");
  if (name) {
    document.getElementById("hunter-name").textContent = name;
    document.getElementById("login-section").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    checkBoss();
  }
};
