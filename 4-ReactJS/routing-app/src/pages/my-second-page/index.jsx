import MyComponent from '../../components/my-function-component';


const MySecondPage = function(){
    return (
        <div>
            <h1>My Second Page</h1>
            <p>Esta es una descripción de my-second page</p>
            <MyComponent ejemploDeProp='Componente usado en la página 2'></MyComponent>
        </div>
    )
}

export default MySecondPage;