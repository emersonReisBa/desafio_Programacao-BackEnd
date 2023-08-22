function processData(input) {
    let primeraMinuscula = input[0];
    let restante = input.slice(1);

    if (primeraMinuscula.toLowerCase() === input[0] && restante.toUpperCase() === restante) {
        console.log(input[0].toUpperCase() + input.slice(1).toLowerCase());
    } else if (input === input.toUpperCase()) {
        console.log(input.toLowerCase());
    } else {
        console.log(input);
    }
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