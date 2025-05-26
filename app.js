
let totalXP = 0;
let rank = "E";

document.getElementById("daily-form").addEventListener("submit", function(e) {
  e.preventDefault();
  let xpToday = 0;
  const form = e.target;

  if (form.workout.checked) xpToday += 50;
  if (form.nutrition.checked) xpToday += 40;
  if (form.sleep.checked) xpToday += 30;

  totalXP += xpToday;
  updateAvatar();
  form.reset();
});

function updateAvatar() {
  const avatar = document.getElementById("avatar-img");
  const rankSpan = document.getElementById("rank");

  if (totalXP >= 2000) {
    rank = "S";
    avatar.src = "avatar_s.png";
  } else if (totalXP >= 1200) {
    rank = "A";
    avatar.src = "avatar_a.png";
  } else if (totalXP >= 800) {
    rank = "B";
    avatar.src = "avatar_b.png";
  } else if (totalXP >= 500) {
    rank = "C";
    avatar.src = "avatar_c.png";
  } else if (totalXP >= 250) {
    rank = "D";
    avatar.src = "avatar_d.png";
  } else {
    rank = "E";
    avatar.src = "avatar_e.png";
  }

  rankSpan.textContent = rank;
}
