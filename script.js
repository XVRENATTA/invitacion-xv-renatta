// esperar a que cargue TODO
document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre") || "RENATTA";
  const pases = params.get("pases") || "1";

  document.getElementById("pases").textContent =
    "🎟️ Acceso para " + pases + " persona(s)";

  // 📍 ubicación
  document.getElementById("ubicacion").href =
    "https://maps.app.goo.gl/o7g5fjQbHxmXxnxK7";

  // 📲 whatsapp
  document.getElementById("whatsapp").href =
    "https://wa.me/528443884334?text=" +
    encodeURIComponent(
      "Hola 😊\n" +
      "Hemos reservado " + pases + " lugares para ti en los XV de Renatta 🌺\n" +
      "Confírmanos cuántos nos acompañarán:\n" +
      "Nombre: "
    );

  // 🌺 PARTÍCULAS DE FLORES
  function lanzarFlores() {
    const contenedor = document.querySelector(".flores");

    const emojis = ["🌺","🌸","🌼"];

    for (let i = 0; i < 25; i++) {
      const flor = document.createElement("span");

      flor.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      flor.style.left = Math.random() * 100 + "vw";
      flor.style.fontSize = (Math.random() * 15 + 15) + "px";
      flor.style.animationDuration = (Math.random() * 2 + 2) + "s";

      contenedor.appendChild(flor);

      setTimeout(() => {
        flor.remove();
      }, 3000);
    }
  }

  // 💌 pantalla inicio + música
  const pantalla = document.getElementById("pantallaInicio");
  const boton = document.getElementById("abrirInvitacion");
  const audio = document.getElementById("musica");

  boton.addEventListener("click", () => {

    lanzarFlores(); // 🌺🔥 AQUÍ

    pantalla.classList.add("abrir");

    audio.play().catch(() => {});

    setTimeout(() => {
      pantalla.style.display = "none";
      document.querySelector(".overlay").style.display = "flex";
    }, 1000);

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