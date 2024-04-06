const args = process.argv.slice(2); // Pegue argumentos a partir do índice 2 (ignore o nome do script e o nome do arquivo)

// Verifique se exatamente 3 argumentos foram fornecidos
if (args.length !== 4) {
  console.error('Erro: Forneça exatamente 3 números como argumentos');
  process.exit(1); // Saia com código de erro 1
}

const x1 = parseFloat( args[ 0 ] );
const y1 = parseFloat( args[ 1 ] );
const x2 = parseFloat( args[ 2 ] );
const y2 = parseFloat( args[ 3 ] );

const exponentx = Math.pow(x2-x1, 2);
const exponenty = Math.pow(y2-y1, 2);

const result = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));

console.log(result.toFixed(4));