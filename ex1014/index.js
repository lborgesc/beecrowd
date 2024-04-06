const args = process.argv.slice(2); // Pegue argumentos a partir do índice 2 (ignore o nome do script e o nome do arquivo)

// Verifique se exatamente 3 argumentos foram fornecidos
if (args.length !== 2) {
  console.error('Erro: Forneça exatamente 3 números como argumentos');
  process.exit(1); // Saia com código de erro 1
}

const km = parseInt( args[ 0 ] );
const fuel = parseFloat( args[ 1 ] );

const kml = (km / fuel).toFixed(3)

console.log(`${kml} km/l`);
