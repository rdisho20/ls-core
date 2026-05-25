const CARS = [
  { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
  { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: 'images/toyota-corolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];
const makesToModels = mapMakesToModels();
const nav = document.querySelector('nav');


function mapMakesToModels() {
  const map = CARS.reduce((accum, car) => {
    if (!accum[car.make]) {
      accum[car.make] = new Set();
    }
    
    accum[car.make].add(car.model);
    return accum;
  }, {})

  return map;
}


function generateCarsHTML() {
  const main = document.querySelector('.cars');
  CARS.forEach(car => {
    let html = `
      <div class="car"
        data-make="${car.make}"
        data-model="${car.model}"
        data-year="${car.year}"
        data-price="${car.price}"
      >
        <img src="${car.image}">
        <h2>${car.make + ' ' + car.model}</h2>
        <p>Year: ${car.year}</p>
        <p>Price: ${car.price}</p>
        <button class="buy">Buy</button>
      </div>
    `;
    main.insertAdjacentHTML('beforeend', html);
  })
}


function buildSelectMenu(set) {
  set = Array.from(set).sort(
    (a, b) => {
      if (typeof a === 'number') {
        return a - b;
      }

      return a.localeCompare(b);
    }
  );

  let menu = document.createElement('span');
  let selectElement = document.createElement('select');
  let html = '<option>Any</option>';

  set.forEach(item => {
    html = html.concat(
      `<option>${item}</option>`
    )
  })

  selectElement.insertAdjacentHTML('beforeend', html);
  menu.insertAdjacentElement('beforeend', selectElement);

  return menu;
}


function generateFilterSelectionMenus() {
  const menuListItems = [...document.querySelector('.menu').querySelectorAll('li')];
  menuListItems.forEach(item => {
    const menuSet = new Set(
      CARS.map(elem => elem[item.textContent.toLowerCase()])
    )

    const menuElement = buildSelectMenu(menuSet);
    menuElement.className = `${item.textContent.toLowerCase()}`;
    item.insertAdjacentElement('beforeend', menuElement);
  })
}


function getSelectedFilters() {
  const navListElements = document.querySelectorAll('.menu li');
  const selections = [...navListElements].reduce((accum, item) => {
    const key = item.querySelector('span').className;
    const value = item.querySelector('select').value;
    accum[key] = value;

    return accum;
  }, {})

  return selections;
}


function restrictModelMenu(filters) {
  const modelSelectMenu = document.querySelectorAll('.menu li .model select option');
  const makeSelection = filters.make;
  if (makeSelection === 'Any') {
    modelSelectMenu.forEach(item => item.style.display = '')
    return;
  }

  const models = makesToModels[makeSelection];
  modelSelectMenu.forEach(item => {
    if (!models.has(item.textContent)) {
      item.style.display = 'none';
    } else {
      item.style.display = '';
    }
  })
}


function toggleCars(filters) {
  const cars = document.querySelectorAll('.car');

  cars.forEach(car => {
    let hide = false;
    for (const [key, value] of Object.entries(filters)) {
      if (value === 'Any') continue;
      else if (car.dataset[key] !== value) {
        hide = true;
        break;
      }
    }

    if (hide) {
      car.style.display = 'none';
    } else {
      car.style.display = 'inline-block';
    }
  })
}


document.addEventListener('DOMContentLoaded', (e) => {
  generateCarsHTML();
  generateFilterSelectionMenus();
  let filters;

  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      filters = getSelectedFilters();
      restrictModelMenu(filters);
      toggleCars(filters);
    }
  })
})