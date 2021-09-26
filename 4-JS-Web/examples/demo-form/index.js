console.log('Inicio Mi JavaScript');

const formElem = document.querySelector('form');

formElem.addEventListener('submit', function(evt){
    console.log('submit fired');
    // evito que el evento se siga propagando y por tanto
    // el submit no termina el action del form
    // evt.preventDefault();
    // first input value
    console.log(`valor del primer input: ${this.elements[0].value}`);
    console.log(`valor del segundo input: ${this.elements[1].value}`);
    // es valido o no todo el formulario
    console.log(`Formulario valido?: ${this.checkValidity()}`);
    // es valido el primer input
    console.log(`primer input valido?:${this.elements[0].checkValidity()}`);
    console.log(`segundo input valido?:${this.elements[1].checkValidity()}`);
})