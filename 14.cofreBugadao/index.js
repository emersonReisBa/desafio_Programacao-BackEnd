function processData(input) {
    let [senhaCerta, senhaDigitada] = input.split("\n");
    let verificacaoSenha = "";
    let indiceLetra;

    for (let j = 0; j < senhaCerta.length; j++) {
        indiceLetra = senhaDigitada.indexOf(senhaCerta[j]);
        verificacaoSenha += senhaDigitada[indiceLetra];
        senhaDigitada = senhaDigitada.slice(indiceLetra);
    }
    if (verificacaoSenha === senhaCerta) {
        console.log("SIM");
    } else {
        console.log("NAO");
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
