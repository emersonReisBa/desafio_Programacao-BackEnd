function processData(input) {
    const linhas = input.trim().split("\n");

    let distanciaPontos = 0;
    let distanciaMaxima = 0;

    const n = parseInt(linhas[0]);
    let coordenadas = [];
    for (let i = 1; i < linhas.length; i++) {
        const coord = linhas[i].split(" ");
        coordenadas.push({
            x: parseFloat(coord[0]),
            y: parseFloat(coord[1])
        })
    }

    for (let x1 of coordenadas) {
        for (let x2 of coordenadas) {
            distanciaPontos = Math.sqrt((x2.x - x1.x) ** 2 + (x2.y - x1.y) ** 2)
            if (distanciaPontos > distanciaMaxima) {
                distanciaMaxima = distanciaPontos
            }
        }
    }


    console.log(distanciaMaxima)
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
