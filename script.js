// esperar a que cargue TODO
document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre") || "Renatta";
  const pases = params.get("pases") || "1";

  document.getElementById("nombre").textContent = nombre;
  document.getElementById("pases").textContent =
  "🎟️ Acceso para " + pases + " persona(s)";

  // ubicación
  document.getElementById("ubicacion").href =
  "https://www.google.com/maps/place/Palapa+El+Fresno";

  // whatsapp
  document.getElementById("whatsapp").href =
  "https://wa.me/528443884334?text=" +
  encodeURIComponent(
    "Hola 😊 confirmo asistencia a los XV de Renatta.\n" +
    "Nombre: " + nombre + "\n"
  );

  // 💌 pantalla inicio + música
  const pantalla = document.getElementById("pantallaInicio");
  const boton = document.getElementById("abrirInvitacion");
  const audio = document.getElementById("musica");

  boton.addEventListener("click", () => {

    pantalla.style.opacity = "0";
    pantalla.style.transition = "0.6s";

    setTimeout(() => {
      pantalla.style.display = "none";
      document.querySelector(".overlay").style.display = "flex"; // 🔥 AQUÍ
    }, 600);

  audio.play().catch(() => {});
  });

  // 🎶 control música
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

  // ⏳ contador
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

});