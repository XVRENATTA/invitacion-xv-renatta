document.addEventListener("DOMContentLoaded",()=>{

const inicio=document.getElementById("inicio");
const btn=document.getElementById("btnAbrir");
const audio=document.getElementById("musica");

btn.onclick=()=>{
inicio.style.opacity="0";
setTimeout(()=>{inicio.style.display="none";},800);
audio.play().catch(()=>{});
};

// musica toggle
const toggle=document.getElementById("toggleMusica");
let play=true;
toggle.onclick=()=>{
if(play){
audio.pause();
toggle.textContent="🔇 Activar música";
}else{
audio.play();
toggle.textContent="🎵 Pausar música";
}
play=!play;
};

// contador
const fechaEvento=new Date("June 20, 2026 17:00:00").getTime();
setInterval(()=>{
const ahora=new Date().getTime();
const diff=fechaEvento-ahora;

const d=Math.floor(diff/(1000*60*60*24));
const h=Math.floor((diff/(1000*60*60))%24);
const m=Math.floor((diff/(1000*60))%60);

document.getElementById("contador").innerHTML=
"⏳ "+d+" días • "+h+" hrs • "+m+" min";
},1000);

// pases dinámicos
const params=new URLSearchParams(window.location.search);
const pases=params.get("pases")||"1";
document.getElementById("pases").textContent="🎟️ Acceso para "+pases+" persona(s)";

});
