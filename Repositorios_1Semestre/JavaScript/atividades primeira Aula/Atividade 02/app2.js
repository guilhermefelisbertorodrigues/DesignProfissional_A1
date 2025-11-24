const inicio = 3;
const fim = 15;
let soma = 0; 

   
    for (let i = inicio; i <= fim; i++) {
        
        if (i % 2 === 0) {
            soma += i; 
        }
    }

    
    document.write(`Intervalo: ${inicio} a ${fim} <br>`);
    document.write(`A soma dos números pares é: ${soma}<br>`);

    
   



