import Readline from 'readline';
// const Readline = require('readline');

const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuantos años tienes? ', (answer) => {
    const number = parseInt(answer);
    if(!isNaN(number)){
        if(number >75){
            console.log('eres un abuelo')
            process.exit();
        }else{
            console.log('A disfrutar')
        }
    }else{
        console.log('Debes introducir un numero')
    }
});
