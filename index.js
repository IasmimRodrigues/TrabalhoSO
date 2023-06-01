const numeros = [10, 15, 80, 1, 6, 7, 13];

function ordenarCrescente() {
    numeros.sort(function(a, b) {
        return a - b;
      });

     console.table(numeros);
}

function ordenarDecrescente() {
    numeros.sort((inicioVetor, finalVetor) => finalVetor - inicioVetor);

    console.table(numeros);
}