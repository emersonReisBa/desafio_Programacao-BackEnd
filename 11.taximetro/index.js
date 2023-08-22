

function solucao(min, km) {
    let valorAPagar = 0;
    let valorAPagarKm = km * 70;
    let valorAPagarMin = min * 50;
    if (min > 20) {
        desconto = (20 * (min - 20));
        valorAPagarMin = valorAPagarMin - desconto;
    } if (km > 10) {
        desconto = (20 * (km - 10));
        valorAPagarKm = valorAPagarKm - desconto;
    }
    console.log(valorAPagarKm + valorAPagarMin);
}

function processData(input) {
    const x = input.split(" ");
    const min = parseFloat(x[0], 10);
    const km = parseFloat(x[1], 10);
    solucao(min, km);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});