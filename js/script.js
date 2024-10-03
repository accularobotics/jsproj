

 let alunos=[]
 function cadastar() {

    let aluno = document.getElementById("nome").value
    //console.log(aluno)
    
    alunos.push (aluno)
    let ponteiro = alunos.length 
    //ponteiro ++
    document.getElementById("dani").innerHTML += `<p >Aluno :${aluno} N# ${ponteiro}\n</p>`
    // document.getElementById("capacid").innerText = `${ponteiro}`
    

    if (ponteiro >= 10){

        document.getElementById("dani").innerText = "Exede capacidade da turma" 
        document.getElementById("unico").disabled = true
   
    }



 }
// =================================
 function createAluno() {
    if(alunos.length < 3) {
        let nome = document.getElementById("nome").value
        let dataNasc = new Date(document.getElementById("dataNasc").value + "T00:00:00")
        let curso = document.getElementById("curso").value
        let aluno = {nome: nome, dataNasc: dataNasc, curso: curso}
        alunos.push(aluno)
        console.log(alunos)
    }
    else {
        document.getElementById("cadastrarAluno").disabled = true
        document.getElementById("msg").innerText = "Turma lotada!"
    }
}

function readAlunos() {
    for (i = 0; i < alunos.length; i++) {
        document.getElementById("alunosCadastrados").innerHTML += `<p>${alunos[i].nome} - ${alunos[i].dataNasc} - ${alunos[i].curso}</p>` // mostra valor digitado pelo usuário na tela
    }
}