let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let num3 = parseFloat(prompt("Digite o terceiro número:"));

if (num1 > num2 && num1 > num3) {
    alert(`O maior número é o primeiro = ${num1}`);
}else if (num2 > num1 && num2 > num3) {
    alert(`O maior número é o segundo = ${num2}`);
}else if (num3 > num1 && num3 > num2) {
    alert(`O maior número é o terceiro ${num3}`);
}  