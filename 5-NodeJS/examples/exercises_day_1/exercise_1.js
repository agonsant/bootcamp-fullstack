const params = process.argv.slice(2);

const preguntaA = "¿Cual es tu nombre?";
const preguntaB = "¿Cual es tu apellido?";

// Versión longitud de parametros
// if (params.length % 2 === 0) {
//   process.stdout.write(preguntaA);
// } else {
//   process.stdout.write(preguntaB);
// }

// Versión con un parámetro de entrada

if(!isNaN(parseInt(params[0]))){
    process.stdout.write(params[0] % 2 === 0 ? preguntaA: preguntaB);
    process.stdin.on('data', () => {
        process.stdout.write(params[0] % 2 === 0?JSON.stringify(process.env): params.join(' '));
        process.exit(0);
    });
}else{
    process.stdout.write('Mandame un numero mamon');
    process.exit(0);
}




