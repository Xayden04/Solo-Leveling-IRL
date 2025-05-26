
window.onload = function() {
  const xpData = {
    for: 0,
    int: 0,
    end: 0,
    total: 0,
    history: {}
  };

  const music = document.getElementById("bg-music");

  const name = localStorage.getItem("hunterName");
  if (name) {
    document.getElementById("hunter-name").textContent = name;
    document.getElementById("login-section").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
  }

  setTimeout(() => {
    document.getElementById("portal").style.display = "none";
    document.querySelector(".intro").style.display = "block";
  }, 3000);

  window.login = function() {
    const input = document.getElementById("name-input").value;
    if (input) {
      localStorage.setItem("hunterName", input);
      document.getElementById("hunter-name").textContent = input;
      document.getElementById("login-section").style.display = "none";
      document.getElementById("dashboard").style.display = "block";
    }
  };

  window.toggleAudio = function() {
    music.muted = !music.muted;
  };
};
