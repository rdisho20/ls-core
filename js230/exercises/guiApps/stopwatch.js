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
  }

  reset() {
    this.#hours = 0;
    this.#minutes = 0;
    this.#seconds = 0;
    this.#centiseconds = 0;
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
    this.handleReset();
    this.handleStartStop();
    this.init();
    this.boundCentisecondsInterval = this.centisecondsInterval.bind(this);
    this.boundSecondsInterval = this.secondsInterval.bind(this);
    this.boundMinutesInterval = this.minutesInterval.bind(this);
    this.boundHoursInterval = this.hoursInterval.bind(this);
  }

  start() {
    this.stopwatch.centisecondsStartTime = Date.now();
    this.stopwatch.secondsStartTime = Date.now();
    this.stopwatch.minutesStartTime = Date.now();
    this.stopwatch.hoursStartTime = Date.now();
    this.startTime = Date.now();
    this.processCentiseconds();
    this.processSeconds();
    this.processMinutes();
    this.processHours();
  }

  processCentiseconds() { this.centisecondsId = setInterval(this.boundCentisecondsInterval, 10) }
  processSeconds() { this.secondsId = setInterval(this.boundSecondsInterval, 1000) }
  processMinutes() { this.minutesId = setInterval(this.boundMinutesInterval, 60000) }
  processHours() { this.hoursId = setInterval(this.boundHoursInterval, 3600000) }

  centisecondsInterval() {
    this.stopwatch.centiseconds = Math.floor((Date.now() - this.stopwatch.centisecondsStartTime) / 10);
    if (this.stopwatch.centiseconds > 99) this.initNextRound('centiseconds');
    this.updateHTML('centiseconds');
  }

  secondsInterval() {
    this.stopwatch.seconds = Math.floor((Date.now() - this.stopwatch.secondsStartTime) / 1000);
    if (this.stopwatch.seconds > 59) this.initNextRound('seconds');
    this.updateHTML('seconds');
  }

  minutesInterval() {
    this.stopwatch.minutes = Math.floor((Date.now() - this.stopwatch.minutesStartTime) / 60000);
    if (this.stopwatch.minutes > 59) this.initNextRound('minutes');
    this.updateHTML('minutes');
  }

  hoursInterval() {
    this.stopwatch.hours = Math.floor((Date.now() - this.stopwatch.hoursStartTime) / 3600000);
    // if (this.stopwatch.hours > 59) this.initNextRound('hours');
    this.updateHTML('hours');
  }

  initNextRound(unit) {
    this.stopwatch[`${unit}StartTime`] = Date.now();
    switch (unit) {
      case 'centiseconds':
        this.stopwatch[`${unit}`] = Math.floor((Date.now() - this.stopwatch[`${unit}StartTime`]) / 10);
        break;
      case 'seconds':
        this.stopwatch[`${unit}`] = Math.floor((Date.now() - this.stopwatch[`${unit}StartTime`]) / 1000);
        break;
      case 'minutes':
        this.stopwatch[`${unit}`] = Math.floor((Date.now() - this.stopwatch[`${unit}StartTime`]) / 60000);
        break;
      case 'hours':
        this.stopwatch[`${unit}`] = Math.floor((Date.now() - this.stopwatch[`${unit}StartTime`]) / 3600000);
        break;
    }
  }

  handleReset() {
    document.querySelector(".reset").addEventListener('click', (e) => {
      try {
        this.clearIntervals();
        this.resetStopwatch();
        document.querySelector(".start-stop").textContent = 'Start';
      } catch (error) {
        // do nothing...
      }
    })
  }

  handleStartStop() {
    document.querySelector(".start-stop").addEventListener('click', (e) => {
      if (e.currentTarget.textContent === 'Start') {
        if (this.centisecondsId !== null) this.resumeClock();
        else this.start();
        e.currentTarget.textContent = 'Stop';
      } else if (e.currentTarget.textContent === 'Stop') {
        this.pauseClock();
        e.currentTarget.textContent = 'Start';
      }
    })
  }

  pauseClock() {
    // this.elapsedBeforePause = this.start
    this.clearIntervals();
  }

  resumeClock() {
    /*
    When resuming, need to continue from previous Date.now() and NOT a current Date.now() ??

    to continue from time left off, take milliseconds elapsed (centiseconds * 10)
    and that is our offset

    for the centiseconds, get its current value (this.stopwatch.centiseconds) as offset
    then start the centiseconds clock, where when checking its current value,
      initialize the next round if > 99 + 'offset'
    */

    /*
    this.stopwatch.centisecondsStartTime = ;
    this.stopwatch.secondsStartTime = ;
    this.stopwatch.minutesStartTime = ;
    this.stopwatch.hoursStartTime = ;
    */

    this.centisecondsId = setInterval(this.boundCentisecondsInterval, 10);
    this.secondsId = setInterval(this.boundSecondsInterval, 1000);
    this.minutesId = setInterval(this.boundMinutesInterval, 60000);
    this.hoursId = setInterval(this.boundHoursInterval, 3600000);
  }

  clearIntervals() {
    clearInterval(this.centisecondsId);
    clearInterval(this.secondsId);
    clearInterval(this.minutesId);
    clearInterval(this.hoursId);
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
    this.centisecondsId = null;
    this.secondsId = null;
    this.minutesId = null;
    this.hoursId = null;
    this.elapsedBeforePause = null;
  }
}

const stopwatchApp = new App();


/* For archives -- using setTimeout for each round not producing expected output
setTimeout(() => {
  clearInterval(this.centisecondId);
  this.stopwatch.centiseconds = 0;
  this.updateHTML('centiseconds');
}, 990)
*/

/* For archives -- using setTimeout for each round not producing expected output
// ... an issue w/ all other setTimeout executions piling up on minitask que behind all
// setTimeouts of centiseconds round
setTimeout(() => {
  clearInterval(this.secondId);
  this.stopwatch.seconds = 0;
  this.updateHTML('seconds');
}, 59990)
*/



