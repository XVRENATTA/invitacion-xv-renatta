// params
const params = new URLSearchParams(window.location.search);
const nombre = params.get("nombre") || "Invitado";
const pases = params.get("pases") || "1";

document.getElementById("nombre").textContent = nombre;
document.getElementById("pases").textContent =
"🎟️ Acceso para " + pases + " persona(s)";

// ubicacion
document.getElementById("ubicacion").href =
"https://www.google.com/maps/place/Palapa+El+Fresno/@25.4867681,-100.9474088";

// whatsapp
document.getElementById("whatsapp").href =
"https://wa.me/528443884334?text=" +
encodeURIComponent(
  "Hola 😊 confirmo asistencia a los XV de Renatta.\n" +
  "Nombre: " + nombre + "\n" +
  "Asistiremos " + pases + " persona(s).\n\n" +
  "¡Nos vemos! 🌺"
);

// pantalla inicial + musica auto
const pantalla = document.getElementById("pantallaInicio");
const boton = document.getElementById("abrirInvitacion");
const audio = document.getElementById("musica");

boton.addEventListener("click", () => {
  pantalla.style.display = "none";
  audio.play();
});

// flores
const flores = document.querySelector(".flores");

for (let i = 0; i < 30; i++) {
  const flor = document.createElement("span");
  flor.textContent = "🌺";
  flor.style.left = Math.random() * 100 + "vw";
  flor.style.animationDuration = (5 + Math.random() * 5) + "s";
  flores.appendChild(flor);
}

// contador
const fechaEvento = new Date("June 20, 2026 17:00:00").getTime();

setInterval(() => {
  const ahora = new Date().getTime();
  const diff = fechaEvento - ahora;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("contador").innerHTML =
    `⏳ <b>${d}</b> días • <b>${h}</b> hrs • <b>${m}</b> min`;
}, 1000);