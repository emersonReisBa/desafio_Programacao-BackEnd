


function solucao(lista) {
    let menorIdade;

    for (let cacula of lista) {

        if (cacula >= 18) {
            if (menorIdade === undefined) {
                menorIdade = cacula;
            } else if (cacula < menorIdade) {
                menorIdade = cacula;
            }
        }
    }

    if (menorIdade !== undefined) {
        console.log(menorIdade);
    } else {
        console.log("CRESCA E APARECA");
    }
}


function processData(input) {
    //Enter your code here
    const strings = input.split(" ");
    const numeros = [];
    for (let i = 0; i < strings.length; i++) {
        numeros.push(parseInt(strings[i], 10));
    }
    solucao(numeros);
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
