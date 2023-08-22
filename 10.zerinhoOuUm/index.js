

function solucao(jogadores) {
    let zero = [];
    let hum = [];

    for (let jogadaDoJogador of jogadores) {

        if (jogadaDoJogador.jogada === 0) {
            zero.push(jogadaDoJogador);
        } else {
            hum.push(jogadaDoJogador);
        }
    }

    if (hum.length === 1) {
        console.log(hum[0].nome);
    } else if (zero.length === 1) {
        console.log(zero[0].nome);
    } else {
        console.log("NINGUEM");
    }


}

function processData(input) {
    solucao(JSON.parse(input));
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
