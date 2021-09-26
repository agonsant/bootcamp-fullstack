

let pageOne = { // Objeto que representa la pagina uno
    id: 'pageOne',
    path: './page-one',
    print: function(){
        const mainPageContainer = document.createElement('div');
        const pageContent = document.createElement('h1');
        pageContent.textContent='Pagina Uno';
        mainPageContainer.appendChild(createBackButton());
        mainPageContainer.appendChild(pageContent);
        return mainPageContainer;
    }
}

let pageTwo = { // objeto que representa la pagina dos
    id: 'pageTwo',
    path: './page-two',
    print: function(){
        const mainPageContainer = document.createElement('div');
        const pageContent = document.createElement('h1');
        pageContent.textContent='Pagina Two';
        mainPageContainer.appendChild(createBackButton());
        mainPageContainer.appendChild(pageContent);
        return mainPageContainer;
    }
}


function navigateToPage(page){
    history.pushState({pageInfo: page.id},null,page.path); // guardo el dato para saber que pagina renderizar
    changePageDOM(page);
}

window.addEventListener('popstate', (evt) => {
  if(evt.state !== null){
    switch(evt.state.pageInfo){ // Cuando hagamos back recupero el parametro que pase en el push para saber que pagina renderizar
        case 'pageOne': changePageDOM(pageOne); break;
        case 'pageTwo': changePageDOM(pageTwo); break;
        default: cleanPage();
    }
  }else{
    cleanPage();
  }
  
});

function goBack(){
    history.back();
}


function cleanPage(){
    const pageContainer = document.getElementById('pageContainer');
    pageContainer.innerHTML='' //limpio la página
}


function changePageDOM(pageToRender){
    cleanPage();
    const pageContainer = document.getElementById('pageContainer');
    pageContainer.appendChild(pageToRender.print()); // pinto la nueva pagina
}


function createBackButton(){
    const btnDOM = document.createElement('button');
    btnDOM.textContent='Back';
    btnDOM.addEventListener('click', goBack);
    return btnDOM;
}



/** LISTENERS PARA NAVEGAR A LA PAGINA CONCRETA */
document.getElementById('PAGE_ONE').addEventListener('click', () => {
    this.navigateToPage(pageOne);
});
document.getElementById('PAGE_TWO').addEventListener('click', () => {
    this.navigateToPage(pageTwo);
})