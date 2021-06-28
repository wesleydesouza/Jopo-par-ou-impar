var nComputador = "";
var nJogador = "";
var minhaEscolha = "";

function sortear(max){
    return Math.floor(Math.random()* max);
}

function jogar(){
    nComputador = sortear(5);
    nJogador = document.querySelector("#meuNumero").value;
    minhaEscolha = document.querySelector("input[type='radio']:checked").value;
    

    if(!nJogador){
        
        alert("primeiro digite um numero");
        return;
    }
    
    nJogador = parseInt(nJogador);

    var total = nJogador+nComputador;
    var resultado = (total%2 ===1) ? "impar" : "par";
    
    verificarResultado(resultado);
}  

function verificarResultado(resultado){
    if(minhaEscolha === resultado){
        alert("eu ganhei");
    }else{
        alert("o computador ganhou");
    }
    console.log("nJogador "+ nJogador);
    console.log("nComputador "+ nComputador);
    
}