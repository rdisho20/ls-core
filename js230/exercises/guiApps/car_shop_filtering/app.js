import templater from "./templates.js";

let cars = [
  { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000},
  { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: 'images/toyota-corolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];

class App {
  constructor(cars) {
    this.allCars = cars;
    this.filteredCars = cars;
    this.filters = this.generateFilters();

    this.filtersDiv = document.getElementById('filters');
    this.carsDiv = document.getElementById('cars');

    this.renderCars();
    this.renderFilterMenu();

    document.querySelector('.filter_btn').addEventListener('click', this.handleFilterClick.bind(this));
  }

  generateFilters() {
    let make = [...new Set(this.allCars.map(car => car.make))];
    let model = [...new Set(this.allCars.map(car => car.model))];
    let price = [...new Set(this.allCars.map(car => car.price))];
    let year = [...new Set(this.allCars.map(car => car.year))];

    return { make, model, price, year };
  }

  filterCars(filters) {
    this.filteredCars = this.allCars.filter(car => {
      return Object.keys(filters).every(key => car[key] === filters[key]);
    });
  }

  renderCars() {
    this.carsDiv.innerHTML = templater.cars(this.filteredCars);
  }

  renderFilterMenu() {
    this.filtersDiv.innerHTML = templater.filtersMenu(this.filters);
  }

  handleFilterClick() {
    let make  = document.getElementById('make_select').value;
    let model = document.getElementById('model_select').value;
    let price = Number(document.getElementById('price_select').value);
    let year  = Number(document.getElementById('year_select').value);

    let filters = {};

    if (make) filters.make = make;
    if (model) filters.model = model;
    if (price) filters.price = price;
    if (year) filters.year = year;

    this.filterCars(filters);
    this.renderCars();
  }
}

new App(cars);
