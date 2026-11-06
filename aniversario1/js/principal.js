
// Cambiar por la fecha real en la que comenzó la relación.
// Meses: enero = 0, febrero = 1, marzo = 2...
const fechaInicio = new Date(2024, 8, 5, 0, 0, 0);

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    if (diferencia < 0) return;

    const total = Math.floor(diferencia / 1000);

    document.getElementById("dias").textContent =
        Math.floor(total / 86400);

    document.getElementById("horas").textContent =
        Math.floor((total % 86400) / 3600);

    document.getElementById("minutos").textContent =
        Math.floor((total % 3600) / 60);

    document.getElementById("segundos").textContent =
        total % 60;
}

if (document.getElementById("dias")) {
    actualizarContador();
    setInterval(actualizarContador, 1000);
}
