// let op1, op2; 
// process.stdout.write('dame el primer numero:');
// process.stdin.on('data', data => {
//     const number =  parseInt(data.toString());
//     if(!isNaN(number)){
//         if(op1 === undefined){
//             op1 = number;
//             process.stdout.write('dame el segundo numero:');
//         }else if(op2 === undefined){
//             // deifnimos el segundo operando
//             op2 = number;
//             process.stdout.write(`El resultado de su suma es ${op1+op2}`);
//             process.exit(0);
//         } 
//     }else{
//         process.stdout.write('No has introducido un numero');
//     }
// }); 


const printMenu = () => {
    console.log(`
        1. DNI/NIE
        2. CIF
        3. IBAN
        4. EMAIL
        5. SALIR
    `);
    process.stdout.write('¿Que opción quieres validar?');
};

const manageOption = (data) => {
    const number = parseInt(data.toString());
    if(!isNaN(number) && number>0 && number <=5){
        switch(number){
            case 1: state = 'VAL_DNI'; break; //COSAS DE DNI
            case 2: state = 'VAL_CIF'; break; //cosas de CIF
            case 3: state = 'VAL_IBAN'; break;// cosas de IBAN
            case 4: state = 'VAL_EMAIL'; break;//cosas de email.
            case 5: process.exit(); break;//cosas de email.
        }
        process.stdout.write('Pasame el dato a validar: ');
    }else{
        process.stdout.write('Opción incorrecta');
        printMenu();
    }
}

const validateDNI = (data) => {
    process.stdout.write(`Tu DNI ${data.toString().trim()} es valido1
    `);
    printMenu();
    state = 'MENU_OPTION';
}


printMenu();
let state = 'MENU_OPTION';
process.stdin.on('data', (data) => {
    switch(state){
        case 'MENU_OPTION': manageOption(data); break;
        case 'VAL_DNI': validateDNI(data); break;
        case 'VAL_CIF': validateCIF(data); break;
        case 'VAL_IBAN': validateIBAN(data); break;
        case 'VAL_EMAIL': validateEMAIL(data); break;
    }    
});