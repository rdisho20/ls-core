/*
> tracker.list().length
= 4
> tracker.elements()
= [div#blue, div#red, div#orange, div#green]
> tracker.elements()[0] === document.querySelector('#blue')
= true
> tracker.elements()[3] === document.querySelector('#green')
= true
> tracker.list()[0]
= click { target: div#blue, buttons: 0, clientX: 195, clientY: 190, layerX: 195, layerY: 190 }
// The event listed in `tracker` can differ by browser (Chrome - PointerEvent, Firefox - click)
> tracker.clear()
*/

/*
rules:
explicit:
- function wraps a callback function inside of a function that adds each event to a tracker

implicit:
- list method returns an array/list where each element is an event object
- elements method returns an array of all targets
- clear method deletes all event objects in the list
- a user cannot reassign elements in the list w/ event objects
*/

class Tracker {
  #list

  constructor() {
    this.#list = [];
  }

  addEventObject(object) { this.#list.push(object); }
  list() { return this.#list.slice(); }
  elements() { return this.#list.map(event => event.target); }
  clear() { 
    this.#list = [];
    return 0;
  }
}

const tracker = new Tracker();

function track(callback) {
  return (event) => {
    if (!tracker.list().includes(event)) {
      tracker.addEventObject(event);
    }
    callback(event)
  }
}

const divRed = document.getElementById('red');
const divBlue = document.getElementById('blue');
const divOrange = document.getElementById('orange');
const divGreen = document.getElementById('green');


divRed.addEventListener('click', track(event => {
  document.body.style.background = 'red';
}));

divBlue.addEventListener('click', track(event => {
  event.stopPropagation();
  document.body.style.background = 'blue';
}));

divOrange.addEventListener('click', track(event => {
  document.body.style.background = 'orange';
}));

divGreen.addEventListener('click', track(event => {
  document.body.style.background = 'green';
}));

/*
> tracker.list().length
= 4
> tracker.elements()
= [div#blue, div#red, div#orange, div#green]
> tracker.elements()[0] === document.querySelector('#blue')
= true
> tracker.elements()[3] === document.querySelector('#green')
= true
> tracker.list()[0]
= click { target: div#blue, buttons: 0, clientX: 195, clientY: 190, layerX: 195, layerY: 190 }
// The event listed in `tracker` can differ by browser (Chrome - PointerEvent, Firefox - click)
> tracker.clear()
= 0
> tracker.list()
= []
> tracker.list()[0] = 'abc'
> tracker.list().length
= 0
*/

/* LS Solution w/ IIFE
const tracker = (() => {
  const events = [];
  return {
    list() {
      return events.slice();
    },
    elements() {
      return this.list().map(({target}) => target);
    },
    add(event) {
      events.push(event);
    },
    clear() {
      events.length = 0;
      return events.length;
    },
  };
})();

function track(callback) {
  function isEventTracked(events, event) {
    return events.includes(event);
  }

  return event => {
    if (!isEventTracked(tracker.list(), event)) {
      tracker.add(event);
    }

    callback(event);
  };
}
*/