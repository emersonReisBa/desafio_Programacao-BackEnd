
function solucao(precos) {
    const menorPreco = precos.reduce(function (contador, atual) {
        return Math.min(contador, atual);
    });

    const valorTotal = precos.reduce(function (contador, atual) {
        return contador + atual;
    });

    let desconto = menorPreco - (menorPreco * 50 / 100);

    if (precos.length >= 3) {
        let novo = valorTotal - desconto;
        console.log(novo);
    } else {
        console.log(valorTotal);
    }
}




function processData(input) {
    const lista = input.split(" ");
    lista.forEach((x, i, a) => a[i] = parseInt(x, 10));
    solucao(lista);
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