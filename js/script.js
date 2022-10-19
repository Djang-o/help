 let nome = document.getElementById("nome").value;
 let sala = document.getElementById("sala").value;
 let observacao = document.getElementById("observacao").value;

function validar() {

   if(matricula=="" |nome=="" |sala=="" |observacao=="" ){
    alert("Preencha todos os campos");
}
else{
    document.getElementById("conteudo").style.display = "none";
    document.getElementById("loading").style.display = "initial";

}

}


