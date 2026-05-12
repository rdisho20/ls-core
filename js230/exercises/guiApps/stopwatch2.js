class Stopwatch {
  #hours;
  #minutes;
  #seconds;
  #centiseconds;

  constructor() {
    this.#hours = 0;
    this.#minutes = 0;
    this.#seconds = 0;
    this.#centiseconds = 0;
    this.startTime = null;
  }

  reset() {
    this.#hours = 0;
    this.#minutes = 0;
    this.#seconds = 0;
    this.#centiseconds = 0;
    this.startTime = null;
  }

  get hours() {
    if (this.#hours < 10) return '0' + this.#hours;
    return String(this.#hours);
  }

  get minutes() {
    if (this.#minutes < 10) return '0' + this.#minutes;
    return String(this.#minutes);
  }

  get seconds() {
    if (this.#seconds < 10) return '0' + this.#seconds;
    return String(this.#seconds);
  }

  get centiseconds() {
    if (this.#centiseconds < 10) return '0' + this.#centiseconds;
    return String(this.#centiseconds);
  }

  set hours(value) { return this.#hours = value }
  set minutes(value) { return this.#minutes = value }
  set seconds(value) { return this.#seconds = value }
  set centiseconds(value) { return this.#centiseconds = value }
}


class App {
  constructor() {
    this.stopwatch = new Stopwatch();
    this.init();
  }

  start() {
    /*
    run centiseconds immediatly
    seconds delayed by 1000 milliseconds
    minutes delayed by 60000 milliseconds
    hours delayed by 3600000 milliseconds

    re-render html for every centisecond passed (same for other units)
    */

  }

  handleReset() {
    document.querySelector(".reset").addEventListener('click', (e) => {
      try {
        this.resetStopwatch();
      } catch (error) {
        // do nothing...
      }
    })
  }

  renderHTML() {
    this.stopwatchElement = document.getElementById('stopwatch');
    this.stopwatchElement.innerHTML = `
      <span id="hours">${this.stopwatch.hours}</span> :
      <span id="minutes">${this.stopwatch.minutes}</span> :
      <span id="seconds">${this.stopwatch.seconds}</span> :
      <span id="centiseconds">${this.stopwatch.centiseconds}</span>
    `
  }

  updateHTML(unit) {
    const element = document.getElementById(unit);
    element.innerHTML = this.stopwatch[unit];
  }

  resetStopwatch() {
    this.stopwatch.reset();
    this.init();
  }

  init() {
    this.renderHTML();
    this.handleReset();
  }
}

const stopwatchApp = new App();

//stopwatchApp.start();

setTimeout(() => {
  stopwatchApp.start();
}, 1000)
