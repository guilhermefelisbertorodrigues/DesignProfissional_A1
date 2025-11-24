function calcularMedia() {
            let nome = document.getElementById("nome").value;
            let n1 = parseFloat(document.getElementById("primeiraNota").value);
            let n2 = parseFloat(document.getElementById("segundaNota").value);
            let n3 = parseFloat(document.getElementById("terceiraNota").value);
            let media = (n1 + n2 + n3) / 3;

            document.getElementById("resultado").innerHTML = "Aluno(A): " + nome + "<br>A média das notas é: " + media.toFixed(2) 
            + "<br>Situação: " + (media <= 4 ? "Reprovado" : (media >4 && media <= 5.9 ? "Recuperação" : "Aprovado"));
        }