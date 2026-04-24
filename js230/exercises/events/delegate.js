/*
input: object? (element), string (css selector), string (event type), function
output: true or undefined
*/

function delegateEvent(parentElement, selector, eventType, callback) {
  if (!(parentElement instanceof Element)) {
    return undefined;
  }

  parentElement.addEventListener(eventType, e => {
    let descendants = parentElement.querySelectorAll(selector);
    descendants.forEach(descendant => {
      if (descendant === e.target) {
        callback(e);
      }
    })
  })

  return true;
}

const callback = ({target, currentTarget}) => {
  alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
};

const element1 = document.querySelector('table');
const element2 = document.querySelector('main h1');
const element3 = document.querySelector('main');

// delegateEvent(element1, 'p', 'click', callback);
// delegateEvent(element2, 'p', 'click', callback);
// delegateEvent(element2, 'h1', 'click', callback);
// delegateEvent(element3, 'h1', 'click', callback);
// delegateEvent(element3, 'aside p', 'click', callback);
delegateEvent(element2, 'p', 'click', callback);


/*
Event target check
You’re looping over all descendants every time. Since you only care whether the actual event target matches the selector and is inside parentElement, you can simplify the handler:
Copy Code
parentElement.addEventListener(eventType, event => {
  const target = event.target;
  if (parentElement.contains(target) && target.matches(selector)) {
    callback(event);
  }
});
*/