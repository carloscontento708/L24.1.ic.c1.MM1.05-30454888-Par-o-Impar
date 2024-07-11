function verificarParImpar() {
    const numero = parseInt(document.getElementById("numero").value);

    let calificacion;

    switch (numero % 2) {
        case 0:
            calificacion = "Par";
            break;
        case 1:
        case -1:
            calificacion = "Impar";
            break;
        default:
            calificacion = "No definido";
    }

    const resultado = `Número: ${numero}<br>Calificación: ${calificacion}`;
    document.getElementById("resultado").innerHTML = resultado;
}
