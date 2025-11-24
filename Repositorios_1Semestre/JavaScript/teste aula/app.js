
/************************************************************************************************************************
//Aula 01 - Introdução ao JavaScript
let nome = prompt("Qual é o seu nome?");

alert("Olá, " + nome + "! Seja bem-vindo(a)!");
document.write("Olá, " + nome + "! Seja bem-vindo(a)!<br>");

let numA = parseInt(prompt("Digite o primeiro número:"));

if(numA % 2 === 0){
    alert("O número " + numA + " é par!");
    document.write("O número " + numA + " é par! <br>");
} else{
    alert("O número " + numA + " é ímpar!");
    document.write("O número " + numA + " é ímpar!<br>");
}

for(let i = 1; i <= 25; i++){
    document.write("<br>" + i);
}
************************************************************************************************************************/
/***********************************************************************************************************************
//Aula 02 - Funções em JavaScript!
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

let resultado = soma(num1 + num2);


alert(`A soma dos números é: ${resultado}`);
imprimir(`A soma dos números é: ${resultado}`);

function soma(a, b){
    return num1 + num2;
}

function imprimir(texto){
    document.write(texto);
}
***********************************************************************************************************************/
/*
//adcionando event list
document.getElementById("meuBotao").addEventListener("click", function(){
    alert("Botão clicado!");
});
*/
