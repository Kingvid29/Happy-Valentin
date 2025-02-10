// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [ 
  { text: "En cada amanecer, mi amor por ti crece", time: 15 },
  { text: "Como susurros de aves que se alzan al viento", time: 18 },
  { text: "Te pienso, mi amor, antes de que el sol despierte", time: 27 },
  { text: "Y caigo, como gotas de lluvia, hacia ti", time: 32 },
  { text: "Como un suspiro suave, tocando tu piel", time: 33 },
  { text: "¿Dónde estoy ahora? Solo en tu amor, sin saber por qué", time: 41 },
  { text: "Mariposas de alegría se posan en mis manos", time: 47 },
  { text: "Tu luz es la que ilumina mis momentos", time: 54 },
  { text: "En el corazón de las flores, encuentro tu amor", time: 59 },
  { text: "Esa visión de ti es mi todo", time: 67 },
  { text: "Es tan fuerte que me deja sin palabras", time: 72 },
  { text: "Silencio... Solo quiero ver lo que significa tu amor", time: 78 },
  { text: "Solo quiero vivir entre tus sueños, volando en tus nubes", time: 83 },
  { text: "¿Dónde estoy ahora? Solo en tu abrazo, mi amor", time: 91 },
  { text: "Mariposas que danzan en mi corazón", time: 97 },
  { text: "Demasiada luz, pero tu amor me guía", time: 104 },
  { text: "En el perfume de las flores, encuentro mi razón", time: 108 },
  { text: "En este momento, solo te pienso a ti", time: 144 },
  { text: "Tu susurro es mi alegría", time: 148 },
  { text: "Solo tú haces que mi mundo florezca", time: 153 },
  { text: "Y caigo en tu amor, como el cielo que abraza la tierra", time: 158 },
  { text: "Como gotas de lluvia que se pierden en tu ser", time: 164 },
  { text: "¿Dónde estoy ahora? Perdido en tus ojos", time: 169 },
  { text: "Mariposas en mis manos, contigo en mis pensamientos", time: 176 },
  { text: "Demasiada luz, solo la que tú me das", time: 183 },
  { text: "Y en el aroma de las flores, te encuentro a ti", time: 188 },
  { text: "Amor, eres mi todo", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
