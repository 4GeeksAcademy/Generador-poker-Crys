import "bootstrap";
import "./style.css";

/*  ARRAY DE CARTAS QUE SE VAN A UTILIZAR  */
const pintas = ["♦", "♥", "♠", "♣", "🃏"]; // Pintas
const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "JOKER"]; // Valores

/* ELEMENTOS DEL DOM */
const carta = document.querySelector(".card");
const inputAncho = document.getElementById("card-width");
const inputAlto = document.getElementById("card-height");
const botonSuerte = document.querySelector(".action-btn");

/*  EVENTOS de usuario altura anchura y click  */
inputAncho.addEventListener("input", () => { if (inputAncho.value > 0) carta.style.width = inputAncho.value + "px"; });
inputAlto.addEventListener("input", () => { if (inputAlto.value > 0) carta.style.height = inputAlto.value + "px"; });
botonSuerte.addEventListener("click", () => generarCartaConVolteo());
window.addEventListener("load", () => generarCartaConVolteo());

/* FUNCION FLIP o giro de carta  */
function generarCartaConVolteo() {
  carta.innerHTML = '<div class="reverso"></div>'; //esta parte muestra el reverso, se crea un div 
  carta.classList.add("flip-card"); // aqui se activa el flip 
  setTimeout(() => { generarContenidoCarta(); }, 1000); // mostrar contenido tras giro
  setTimeout(() => { carta.classList.remove("flip-card"); }, 2000); // quitar flip
}

/* GENERAR CONTENIDO  */
function generarContenidoCarta() {
  carta.innerHTML = "";
  let pinta = pintas[Math.floor(Math.random() * pintas.length)];
  let valor = valores[Math.floor(Math.random() * valores.length)];

  if (pinta === "🃏" || valor === "JOKER") { ponerJoker(); return; }

  const esRoja = (pinta === "♦" || pinta === "♥");

  const esquinaSup = document.createElement("div");
  esquinaSup.className = "corner-suit top";
  esquinaSup.style.color = esRoja ? "red" : "black";
  esquinaSup.innerHTML = `${pinta}<br>${valor}`;

  const esquinaInf = document.createElement("div");
  esquinaInf.className = "corner-suit bottom";
  esquinaInf.style.color = esRoja ? "red" : "black";
  esquinaInf.innerHTML = `${pinta}<br>${valor}`;

  const centro = document.createElement("div");
  centro.className = "center-value";
  centro.style.color = esRoja ? "red" : "black";
  centro.textContent = valor;

  carta.appendChild(esquinaSup);
  carta.appendChild(esquinaInf);
  carta.appendChild(centro);
}

/* Funcion para poner JOKER  */
function ponerJoker() {
  carta.innerHTML = "";
  const valor = document.createElement("div");
  valor.className = "joker-value";
  valor.textContent = "JOKER";

  const icono = document.createElement("div");
  icono.className = "joker-icon";
  icono.textContent = "👑";

  carta.appendChild(valor);
  carta.appendChild(icono);
  mostrarMensajeJoker();
}

/* MENSAJE JOKER  */
function mostrarMensajeJoker() {
  const mensaje = document.createElement("div");
  mensaje.className = "joker-message";
  mensaje.textContent = "MaxxitoJoKer HAHA!";
  document.body.appendChild(mensaje);
  setTimeout(() => mensaje.remove(), 1700);
}
