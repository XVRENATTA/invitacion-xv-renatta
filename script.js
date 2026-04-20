// 🎯 PARAMETROS
const params = new URLSearchParams(window.location.search);

const nombre = params.get("nombre") || "Invitado";
const pases = params.get("pases") || "1";

document.getElementById("nombre").textContent = nombre;
document.getElementById("pases").textContent = "Tienes " + pases + " pase(s)";

// 📍 UBICACION (CAMBIA ESTE LINK)
  document.getElementById("ubicacion").href =
  "https://www.google.com/maps/place/Palapa+El+Fresno/@25.4867681,-100.9474088,79m/data=!3m1!1e3!4m6!3m5!1s0x868813947d67d8d5:0xa690f3114b1850d4!8m2!3d25.4865685!4d-100.9473367!16s%2Fg%2F11mpckfgy8?entry=ttu";

// 📲 WHATSAPP (CAMBIA EL NUMERO)
document.getElementById("whatsapp").href =
  "https://wa.me/528443884334?text=" +
  encodeURIComponent("Hola, confirmo asistencia a los XV de Renatta. Somos " + pases + " personas.");

// 🎶 MUSICA
const audio = document.getElementById("musica");
const btn = document.getElementById("btnMusica");

btn.addEventListener("click", () => {
  audio.play();
});

// 🌸 FLORES
const floresContainer = document.querySelector(".flores");

for (let i = 0; i < 20; i++) {
  const flor = document.createElement("span");
  flor.textContent = "🌺";

  flor.style.left = Math.random() * 100 + "vw";
  flor.style.animationDuration = (5 + Math.random() * 5) + "s";
  floresContainer.appendChild(flor);
}

// ⏳ CONTADOR (AJUSTA FECHA)
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