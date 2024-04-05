/* 
Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
*/

const args = process.argv.slice(2); // Pegue argumentos a partir do índice 2 (ignore o nome do script e o nome do arquivo)

// Verifique se exatamente 3 argumentos foram fornecidos
if (args.length !== 3) {
  console.error('Erro: Forneça exatamente 3 números como argumentos');
  process.exit(1); // Saia com código de erro 1
}

// Converta argumentos para números
const a = parseFloat(args[0]);
const b = parseFloat(args[1]);
const c = parseFloat(args[2]);

const triangulo = (c*a)/2;
const circulo = (c*c)* 3.14159;
const trapezio = ((a+b) * c) / 2;
const quadrado =  b * b;
const retangulo = a * b 

console.log(`
    TRIANGULO: ${triangulo.toFixed(3)}
    CIRCULO: ${circulo.toFixed(3)}
    TRAPEZIO: ${trapezio.toFixed(3)}
    QUADRADO: ${quadrado.toFixed(3)}
    RETANGULO: ${retangulo.toFixed(3)}
`);
