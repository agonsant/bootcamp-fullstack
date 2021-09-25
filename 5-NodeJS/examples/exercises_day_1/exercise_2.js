
// f(x) = 3*x, f(5) = 3*5
// fibonacci(x) = fibonacci(x-1) + fibonacci(x-2) ?? 
// fibonacci(10) = fibonacci(9) + fibonacci(8)
// fibonacci(0)=0
// fibonacci(1)=1
// fibonacci(2)=1

const fibonacciSucesion = (n) => {
    let fib = 1, fibPrev = 0; // fib === fibonacci(1), fibPrev === fibonacci(0)
    const arr = [];
    if(n>= 0){
        arr.push(fibPrev);
        if(n>=1) arr.push(fib);
    } 

    for(let i=2; i<=n; i++){
        const aux = fib;
        fib += fibPrev;
        fibPrev = aux;
        arr.push(fib);
    }
    return arr;
}

const number = parseInt(process.argv[2]);

if(isNaN(number) || number >100) process.exit(1);
process.stdout.write(fibonacciSucesion(number).join(' '));