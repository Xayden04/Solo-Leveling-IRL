
let stats = {
  for: 0,
  vit: 0,
  end: 0,
  int: 0,
  cha: 0
};

function validerQuetes() {
  const checkboxes = document.querySelectorAll('#quests input[type="checkbox"]');
  checkboxes.forEach(cb => {
    if (cb.checked) {
      stats[cb.dataset.type] += parseInt(cb.value);
      cb.checked = false;
    }
  });
  updateStats();
  saveProgress();
}

function updateStats() {
  for (let key in stats) {
    document.getElementById(key).textContent = stats[key];
  }
}

function saveProgress() {
  localStorage.setItem("shadowStats", JSON.stringify(stats));
}

function loadProgress() {
  const saved = JSON.parse(localStorage.getItem("shadowStats"));
  if (saved) {
    stats = saved;
    updateStats();
  }
}

window.onload = loadProgress;
