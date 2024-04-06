const args = process.argv.slice(2); // Pegue argumentos a partir do índice 2 (ignore o nome do script e o nome do arquivo)

// Verifique se exatamente 3 argumentos foram fornecidos
if (args.length !== 3) {
  console.error('Erro: Forneça exatamente 3 números como argumentos');
  process.exit(1); // Saia com código de erro 1
}

const a = parseInt( args[ 0 ] );
const b = parseInt( args[ 1 ] );
const c = parseInt( args[ 2 ] );


function maior( a, b) {
    return (a + b + Math.abs( a - b )) / 2;
}


console.log( maior( a,maior( b,c ) ) );