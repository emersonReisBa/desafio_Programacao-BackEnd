

function solucao(texto) {
    const novoTexto = texto.trim().split(/\s+/);
    let tamanho = 0;
    for (let tamanhoArray of novoTexto) {
        if (tamanhoArray) {
            tamanho++;
        }
    }
    console.log(tamanho);
}

function processData(input) {
    solucao(input)
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