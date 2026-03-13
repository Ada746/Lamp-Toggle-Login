const room = document.getElementById("room");
const login = document.getElementById("login");
const cord = document.getElementById("cord");

function toggleLamp() {
  // little pull animation class
  room.classList.add("pull");
  setTimeout(() => room.classList.remove("pull"), 260);

  // toggle lamp on/off
  const isOn = room.classList.toggle("on");

  // accessibility: hide login from screen readers when off
  login.setAttribute("aria-hidden", String(!isOn));

  // focus first input when it appears
  if (isOn) {
    const firstInput = login.querySelector("input");
    setTimeout(() => firstInput?.focus(), 350);
  }
}

cord.addEventListener("click", toggleLamp);

// optional: keyboard support (space/enter) if the cord is focused
cord.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleLamp();
  }
});

// prevent form from actually submitting (demo)
login.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Demo login ✨ (no server attached)");
});
