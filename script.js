const params = new URLSearchParams(window.location.search);

const nombre = params.get("nombre") || "Invitado";
const pases = params.get("pases") || "1";

document.getElementById("nombre").textContent = nombre;
document.getElementById("pases").textContent = "Tienes " + pases + " pase(s)";

// ubicación
document.getElementById("ubicacion").href =
"https://www.google.com/maps/place/Palapa+El+Fresno/@25.4867681,-100.9474088";

// whatsapp
document.getElementById("whatsapp").href =
"https://wa.me/528443884334?text=" +
encodeURIComponent("Hola, confirmo asistencia a los XV de Renatta. Somos " + pases + " personas.");

// música
const audio = document.getElementById("musica");
const btn = document.getElementById("btnMusica");

let reproduciendo = false;

btn.addEventListener("click", () => {
  if (!reproduciendo) {
    audio.volume = 0.5;
    audio.play().then(() => {
      btn.textContent = "🌊 Sonando...";
      reproduciendo = true;
    }).catch(() => {
      alert("Toca otra vez para activar la música 🎵");
    });
  } else {
    audio.pause();
    btn.textContent = "🎵 Activar ambiente";
    reproduciendo = false;
  }
});

// flores
const floresContainer = document.querySelector(".flores");

for (let i = 0; i < 35; i++) {
  const flor = document.createElement("span");
  flor.textContent = "🌺";
  flor.style.left = Math.random() * 100 + "vw";
  flor.style.animationDuration = (5 + Math.random() * 5) + "s";
  floresContainer.appendChild(flor);
}

// contador
const fechaEvento = new Date("June 20, 2026 17:00:00").getTime();

setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

  document.getElementById("contador").textContent =
    `⏳ ${dias} días ${horas}h ${minutos}m`;
}, 1000);