/*
Stopwatch:
HAS
- hours (00-99)
- minutes (00-59)
- seconds (00-59)
- centiseconds (00-99)

All counters should use a leading zero when the corresponding time value is less than 10.
- matters when rendered as HTML (using strings)
- update HTML every 'centisecond'

Note that one centisecond is 1/100th of a second or 10 milliseconds.
*/

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

    this.centisecondRoundInterval = setInterval(() => {
      this.stopwatch.centisecondsStartTime = Date.now();
      this.processCentiseconds();
    }, 1000);

    this.secondRoundInterval = setInterval(() => {
      this.stopwatch.secondsStartTime = Date.now();
      this.processSeconds();
    }, 1000);
  }

  processCentiseconds() {
    // process Centiseconds (1 round completed)
    // every millisecond a new interval is created
    this.centisecondId = setInterval(() => {
      this.stopwatch.centiseconds = Math.floor((Date.now() - this.stopwatch.centisecondsStartTime) / 10);
      this.updateHTML('centiseconds');
    }, 10);

    setTimeout(() => {
      clearInterval(this.centisecondId);
      this.stopwatch.centiseconds = 0;
      this.updateHTML('centiseconds');
    }, 990)
  }

  processSeconds() {
    // interval(s) created recursively every second
    // if click reset button, no new intervals, but seconds start display counting
    // single interval removed at 59 second mark
    this.secondId = setInterval(() => {
      this.stopwatch.seconds = Math.floor((Date.now() - this.stopwatch.secondsStartTime) / 1000);
      console.log(this.stopwatch.seconds);
      this.updateHTML('seconds');
    }, 1000);

    setTimeout(() => {
      clearInterval(this.secondId);
      this.stopwatch.seconds = 0;
      this.updateHTML('seconds');
    }, 59990)
  }

  handleReset() {
    document.querySelector(".reset").addEventListener('click', (e) => {
      try {
        //clearInterval(this.centisecondId);
        clearInterval(this.centisecondRoundInterval);
        //clearInterval(this.secondId);
        clearInterval(this.secondRoundInterval);
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





