document.addEventListener("DOMContentLoaded",()=>{

const params=new URLSearchParams(window.location.search);
const pases=params.get("pases")||"1";

document.getElementById("pases").textContent="🎟️ "+pases+" personas";

document.getElementById("ubicacion").href="https://maps.google.com";
document.getElementById("whatsapp").href="https://wa.me/528443884334";

const pantalla=document.getElementById("pantallaInicio");
const boton=document.getElementById("abrirInvitacion");
const audio=document.getElementById("musica");

boton.onclick=()=>{
pantalla.style.display="none";
audio.play();
};

const btn=document.getElementById("toggleMusica");
let play=true;

btn.onclick=()=>{
if(play){audio.pause();btn.textContent="🔇 Activar";}
else{audio.play();btn.textContent="🎵 Pausar";}
play=!play;
};

});
