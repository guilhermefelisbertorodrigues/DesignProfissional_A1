let nome = document.getElementById("nome").value;   
let peso = parsefloat(document.getElementById("peso").value);
let altura = parseFloat(document.getElementById("altura").value);

function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);

    let classificacao;

    if (imc < 18.5) {
        classificacao = "vc está classificado como: Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "vc está classificado como: Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "vc está classificado como: Sobrepeso";
    } else {
        classificacao = "vc está classificado como: Obesidade";
    }

    document.getElementById("resultado").innerHTML = `O ${nome} tem o imc igual a ${imc.toFixed(2)} e ${classificacao}`;
}


