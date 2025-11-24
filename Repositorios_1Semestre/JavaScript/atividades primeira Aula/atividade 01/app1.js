let nome = prompt("Qual é o seu nome?");
let numA = parseFloat(prompt("Digite a primeira nota:"));
let numB = parseFloat(prompt("Digite a segunda nota:"));
let media = (numA + numB) / 2;

if (media >= 6){
    document.write(`Parabéns, ${nome}! Você foi aprovado com média ${media.toFixed(2)}.`);
}else{
    document.write(`Que pena, ${nome}. Você foi reprovado com média ${media.toFixed(2)}.`);
}
