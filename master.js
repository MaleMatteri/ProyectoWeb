var sueldoBruto = 0;

function calcularDescuentos() {
    var sueldoConJubilacion = (sueldoBruto * 11) / 100;
    var sueldoConPAMI = ((sueldoBruto - sueldoConJubilacion) * 3) / 100;
    var sueldoConObraSocial = ((sueldoBruto - sueldoConPAMI - sueldoConJubilacion) * 3) / 100;
    var sueldoFinal = sueldoBruto - sueldoConJubilacion - sueldoConObraSocial - sueldoConPAMI
    return [sueldoConJubilacion.toFixed(2), sueldoConPAMI.toFixed(2), sueldoConObraSocial.toFixed(2), sueldoFinal.toFixed(2)]
}

$(document).ready(function () {
    $('#botonCalcular').on('click', function () {
        sueldoBruto = $('#inputSueldo').val()
        console.log(sueldoBruto)
        var valores = calcularDescuentos();
        for (let valor = 0; valor < valores.length; valor++) {
            $('#sueldoJubilacion').val("$" + valores[0]);
            $('#sueldoPAMI').val("$" + valores[1]);
            $('#sueldObraSocial').val("$" + valores[2]);
            $('#SaldoFinal').text("$" + valores[3]);
        }
    });

});


