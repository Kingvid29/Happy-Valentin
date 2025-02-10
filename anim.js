// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [ 
{ text: "Tu cabello rizado, como un remolino de sol,", time: 30 },
{ text: "espejos dorados que brillan en cada rincón.", time: 18 },
{ text: "Rubia como la luna que en la noche se asoma,", time: 27 },
{ text: "y en tus rizos, mi corazón se asoma.", time: 32 },
{ text: "Tus ojos, dos luceros, tan claros como el mar,", time: 33 },
{ text: "y en tu risa, mi mundo se vuelve a encantar.", time: 41 },
{ text: "Como un viento suave que acaricia mi piel,", time: 47 },
{ text: "me haces sentir feliz, me haces ver el laurel.", time: 54 },
{ text: "El día de San Valentín, quiero regalarte más,", time: 59 },
{ text: "que mis palabras, que mis risas, que mi paz.", time: 67 },
{ text: "Porque en tus rizos encuentro mi lugar,", time: 72 },
{ text: "y contigo mi amor siempre quiere danzar.", time: 78 },
{ text: "Eres mi alegría, mi razón, mi sol brillante,", time: 83 },
{ text: "y en este día de amor, te abrazo al instante.", time: 91 },
{ text: "Rizada y rubia, tan hermosa mi estrella,", time: 97 },
{ text: "contigo, mi amor, la vida es más bella.", time: 104 },
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
