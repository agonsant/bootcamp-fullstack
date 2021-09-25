console.log('inicio');

function foo(){
    console.log('foo');
}

function bar(){
    foo();
    console.log('bar');
}

bar();