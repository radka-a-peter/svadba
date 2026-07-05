// =============================
// ODPOČÍTAVANIE DO SVADBY
// =============================

const countdown = document.getElementById("countdown");

const weddingDate = new Date("2026-10-24T00:00:00");

const today = new Date();
today.setHours(0, 0, 0, 0);

const difference = weddingDate - today;
const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

if (countdown) {
  if (days > 0) {
    countdown.innerHTML =
      `o <strong>${days}</strong> dní sa stanú v Ňom Jednom jedno`;
  } else if (days === 0) {
    countdown.innerHTML =
      "dnes sa stanú v Ňom Jednom jedno";
  } else {
    countdown.innerHTML =
      "24.10.2026 sa stali v Ňom Jednom jedno";
  }
}


// =============================
// RSVP FORMULÁR
// tu neskôr napojíme Apps Script
// =============================

const rsvpForm = document.getElementById("rsvp-form");

if (rsvpForm) {
  rsvpForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert(
      "Ďakujeme za potvrdenie účasti ❤️\n\nFormulár bude čoskoro aktívny."
    );
  });
}


// =============================
// DARY
// Google Sheet + Apps Script
// doplníme neskôr
// =============================

// sem príde:
// fetch(GOOGLE_SCRIPT_URL)
// načítanie darov
// rezervácia
