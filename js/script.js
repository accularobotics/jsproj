
function NumeroPrimo() {
    let primo = Number(document.getElementById("primo").value)
    
    

      if( (primo == 2) || (primo == 3) || (primo == 5) || (primo == 7 )){
       document.getElementById("numero").innerText = "Esse é número primo"

      }   else


    if (primo %2 ==0 ) {
        document.getElementById("numero").innerText = "Divisivel por 2"
    } else if (primo %3 == 0) {
        document.getElementById("numero").innerText = "Divisivel por 3"
    } else if (primo %7 == 0) {
        document.getElementById("numero").innerText = "Divisivel por 7"
     } else  { 
         document.getElementById("numero").innerText = "Esse é número primo"
     } 

}
function classAtleta(){

    let atleta = Number(document.getElementById("atleta").value)

    if ((atleta  >= 6) & (atleta <= 11)) {
         document.getElementById("atletas").innerText = "Infantil"
    } else 
        if ((atleta  >= 12) & (atleta <= 17)) {
            document.getElementById("atletas").innerText = "Juvenil"
    }
    else 
        if ((atleta  >= 18) & (atleta <= 34)) {
            document.getElementById("atletas").innerText = "Adulto"
    } else {

        document.getElementById("atletas").innerText = "Atleta inapto !"        
    }


}