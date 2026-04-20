document.addEventListener("DOMContentLoaded", () => {

const params = new URLSearchParams(window.location.search);
const nombre = "Renatta";
const pases = params.get("pases") || "1";

document.getElementById("nombre").textContent = nombre;
document.getElementById("pases").textContent =
"🎟️ Acceso para " + pases + " persona(s)";

document.getElementById("ubicacion").href =
"https://www.google.com/maps/place/Palapa+El+Fresno";

document.getElementById("whatsapp").href =
"https://wa.me/528443884334?text=" +
encodeURIComponent("Confirmo asistencia. Somos " + pases + " personas.");

const pantalla = document.getElementById("pantallaInicio");
const boton = document.getElementById("abrirInvitacion");
const audio = document.getElementById("musica");

boton.addEventListener("click", () => {
  pantalla.style.display = "none";
  audio.play().catch(()=>{});
});

const toggleBtn = document.getElementById("toggleMusica");
let reproduciendo = true;

toggleBtn.addEventListener("click", () => {
  if (reproduciendo) {
    audio.pause();
    toggleBtn.textContent = "🔇 Activar música";
  } else {
    audio.play();
    toggleBtn.textContent = "🎵 Pausar música";
  }
  reproduciendo = !reproduciendo;
});

const fechaEvento = new Date("June 20, 2026 17:00:00").getTime();

setInterval(() => {
  const ahora = new Date().getTime();
  const diff = fechaEvento - ahora;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("contador").innerHTML =
    `⏳ ${d} días • ${h} hrs • ${m} min`;
}, 1000);

});
