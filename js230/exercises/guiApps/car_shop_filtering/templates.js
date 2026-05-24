const templater = {
  cars(filteredCars) {
    let sections = filteredCars.map(car => {
      return `
        <div class="car">
          <figure>
            <img src="${car.image}">
          </figure>
          <h2>${car.make} ${car.model}</h2>
          <p class="year">Year: ${car.year}</p>
          <p class="price">Price: $${car.price}</p>
          <a href="#">Buy</a>
        </div>
      `;
    });

    return sections.join('');
  },

  options(values) {
    let anyOption = '<option value="">Any</option>';
    return anyOption + values
                         .map(value => `<option value="${value}">${value}</option>`)
                         .join('');
  },

  selector(filterName, values) {
    return `
    <label for="${filterName}_select">${filterName.charAt(0).toUpperCase() + filterName.slice(1)}</label>
    <select name="${filterName}" id="${filterName}_select">
      ${this.options(values)}
    </select>
    `;
  },

  filtersMenu(filters) {
    let filtersHtml = Object.entries(filters)
      .map(([filterName, values]) => this.selector(filterName, values))
      .join('');

    return filtersHtml + '<button class="filter_btn">Filter</button>';
  },
};

export default templater;