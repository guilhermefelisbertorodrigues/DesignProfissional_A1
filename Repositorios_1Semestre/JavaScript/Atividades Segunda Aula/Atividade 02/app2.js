let salarioBruto = document.getElementById("salarioBruto").value;
let nome = document.getElementById("nome").value;
let valorDescontos = valeAlimentacao + valeRefeicao + planoSaude;
let valeAlimentacao = salarioBruto * 0.20;
let valeRefeicao = salarioBruto * 0.15;
let planoSaude = salarioBruto * 0.10;

function calcularSalarioLiquido(salarioBruto) {
    let salarioLiquido;
    
   
    salarioLiquido = salarioBruto - valorDescontos;
    return salarioLiquido;
};