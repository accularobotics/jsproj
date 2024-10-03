
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
function clientes() {

    let cliente = Number(document.getElementById("clientes").value);
    let capac = Number(document.getElementById("capacidade").value);



 }

 let capac = 1
 function capacidade() {

    let cliente = Number(document.getElementById("clientes").value);
    // let capac = Number(document.getElementById("capacidade").value);
    

    while (cliente <= capac){
        capac -= capac
        if(capac==0) {
            document.getElementById("cap").innerText = "Restaurante Lotado, não há mais mesas disponiveis"; // Atualiza o conteúdo de x1
            document.getElementById("cap").disabled = true
        } else {document.getElementById("cap").innerText = "Temos vagas" }
    }

        

 }

 function clientes() {
    let produtosS = Number(document.getElementById("valorProdutos").value);
    let Somados

    while (produtosS <= Somados){





 }