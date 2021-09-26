let cityMadrid = {
  name: "Madrid",
  description: "A city without beach",
  country: "Spain",
  url: "https://zigzagdigital.com/upload/img/periodico/img_20088.jpg",
  coords: {
    lat: 40.4167754,
    long: -3.7037902,
  },
};

let cityBarcelona = {
    name: "Barcelona",
    description: "A city with beach",
    country: "Spain",
    url: "https://lp-cms-production.imgix.net/2021-02/shutterstockRF_1347219839.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850",
    coords: {
      lat: 56.4167754,
      long: 0.7037902,
    },
  };

  let cityValencia = {
    name: "Valencia",
    description: "A city with almost beach",
    country: "Venezuela",
    url: "http://www.valencia24.net/images/sunsetcity.jpg",
    coords: {
      lat: -46.4167754,
      long: -46.7037902,
    },
  };

let cities = [cityMadrid,cityBarcelona, cityValencia, cityBarcelona];

function createCityCardHeader(urlImage, country){
      /**------------ HEADER -------------- */

  /** img */
  const cardHeaderImg = document.createElement("img");
  cardHeaderImg.src = urlImage;
  cardHeaderImg.classList.add("img__block");

  /** h2 */

  const cardHeaderTitle = document.createElement("h2");
  cardHeaderTitle.textContent = country;
  cardHeaderTitle.classList.add("title__block");

  /** div- header container */

  const cardHeaderContainer = document.createElement("div");
  cardHeaderContainer.classList.add("card__header");
  cardHeaderContainer.appendChild(cardHeaderImg);
  cardHeaderContainer.appendChild(cardHeaderTitle);

  return cardHeaderContainer;
}

function createCityCardBody(name, description, coords){
      /**------------ BODY -------------- */
  /** H3 */
  const cardBodyTitle = document.createElement("h3");
  cardBodyTitle.textContent = name;
  /** p - description */
  const cardBodyDescription = document.createElement("p");
  cardBodyDescription.textContent = description;
  /** p - lat */
  const cardBodyLat = document.createElement("p");
  cardBodyLat.textContent = coords.lat;
  /** p - long */
  const cardBodyLong = document.createElement("p");
  cardBodyLong.textContent = coords.long;
  /** div - card body container */
  const cardBodyContainer = document.createElement("div");
  cardBodyContainer.classList.add("card__body");
  cardBodyContainer.appendChild(cardBodyTitle);
  cardBodyContainer.appendChild(cardBodyDescription);
  cardBodyContainer.appendChild(cardBodyLat);
  cardBodyContainer.appendChild(cardBodyLong);

  return cardBodyContainer;
}

function createCityCard(city) {
  /** ------------ CARD MAIN CONTAINER ---------- */
  const cardMainContainer = document.createElement("article");
  cardMainContainer.classList.add("card__container");
  cardMainContainer.appendChild(createCityCardHeader(city.url, city.country));
  cardMainContainer.appendChild(createCityCardBody(city.name, city.description, city.coords));

  return cardMainContainer;
}


function printCities(cities){
    const cardListContainer = document.createElement('section');
    cardListContainer.classList.add('cities__container');
    cities.forEach(value => cardListContainer.appendChild(createCityCard(value)));
    document.body.appendChild(cardListContainer);
}

/**
 * Problema: Guardar el estado en el que estaba cuando refresque o 
 *           cierre y abra el navegador
 * ¿Que tecnica de las que he aprendido puedo usar? Storage
 * ¿Que tipo de storage puedo usar (de los que se)? Local(elijo) y Cookies
 * Pasos del algoritmo:
 *    -OK Guardar la(s) variable(s) que necesito para mantener mi estado
 *      en el LOCALSTORAGE
 *        ¿Que variables necesito? contador de la posicion actual
 *        ¿Como guardo una variable en el Local? localStorage.setItem()
 *        ¿Cuando tengo qeu guardarlo? 
 *              * Cuando la variable sufra un cambio 
 *    - Cuando cargue la página, inicializar mi contador con lo que 
 *      valia en el localStorage
 *        ¿Como recupero el valor de una clave en el local stoage?
 *            - JSON.parse(localStorage.getItem())
 *        ¿Que pasa la primera vez de todas?
 *            - No existirá la variable en localstorage
 *            - devolvera undefined
 *            - inicializar a cero el contador 
 * 
 *    - Volver a pintar las cards hasta la posicion recuperada (sin incluir)
 */

 function printCityCardsUntilPosition(citiesList, pos){
  for(let i=0; i<pos; i++){
    const cardDOM = createCityCard(citiesList[i]);
    citiesContainer.appendChild(cardDOM);
  }

}

const btn = document.getElementById('ADD_CARD');
const citiesContainer = document.querySelector('.cities__container');
const localCardPosition = JSON.parse(localStorage.getItem('currentCardPosition'));
let currentCardPosition = localCardPosition !==null ? localCardPosition : 0; 
printCityCardsUntilPosition(cities, currentCardPosition);

btn.addEventListener('click', function (){
  if(currentCardPosition<cities.length){
    const cityDOM = createCityCard(cities[currentCardPosition]);
    citiesContainer.appendChild(cityDOM);
    currentCardPosition++;
    localStorage.setItem('currentCardPosition',currentCardPosition);
    if(currentCardPosition=== cities.length){
      btn.style.display = 'none';
    }
  }
});


