
function Tabuada() {
    let h = Number(document.getElementById("tabuada").value);
    let resultados;
    let a = '';

    // Limpa o conteúdo anterior
    document.getElementById("x1").innerText = '';

    for (let y = 1; y <= 10; y++) {
        resultados = h * y;
        a += `${h} x ${y} = ${resultados}\n`; // Formata a string
    }

    document.getElementById("x1").innerText = a; // Atualiza o conteúdo de x1
}
// ---------------------------
function somaProdutos() {
    let p1 = Number(document.getElementById("produto1").value);
    let p2 = Number(document.getElementById("produto2").value);
    let p3 = Number(document.getElementById("produto3").value);
    let p4 = Number(document.getElementById("produto4").value);
    let p5 = Number(document.getElementById("produto5").value);
    
    let resultadoy;
    let px = '';

    // Limpa o conteúdo anterior
    document.getElementById("r1").innerText = '';
    resultadoy = p1 + p2 + p3 + p4 + p5 ;

    // for (let pr = 1; pr <= 5; pr++) {
    //     resultadoy = p1 + p2 + p3 + p4 + p5 ;
    //     // p1 += `${px} r ${pr} = ${resultadoy}\n`; // Formata a string
    // }

    document.getElementById("r1").innerText = resultadoy; // Atualiza o conteúdo de x1
}
// ---------------------------



let saldoAtual = 0;

function extratos() {
    // Obtém o saldo inicial e o valor da operação
    const saldoInicial = Number(document.getElementById("saldo").value);
    const operacao = Number(document.getElementById("operacao").value);
    const tipoOperacao = document.getElementById("tipo").value;

    // Verifica o tipo de operação e atualiza o saldo
    if (tipoOperacao === "+") {
        saldoAtual = saldoInicial + operacao; // Depósito
    } else if (tipoOperacao === "-") {
        saldoAtual = saldoInicial - operacao; // Saque
    }

    // Atualiza o campo de saldo inicial e o texto de saldo atual
    document.getElementById("saldo").value = saldoAtual;
    document.getElementById("SaldoAtu").innerText = `Saldo Atual: ${saldoAtual}`;
}