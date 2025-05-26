
let totalXP = 0;
let rank = "E";

document.getElementById("daily-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  let dayXP = 0;

  if (form.workout.checked) dayXP += 50;
  if (form.meals.checked) dayXP += 40;
  if (form.sleep.checked) dayXP += 30;

  totalXP += dayXP;
  updateRank();
  form.reset();
});

function updateRank() {
  let avatar = document.getElementById("avatar-img");
  let rankText = document.getElementById("rank");

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

  rankText.textContent = rank;
}
