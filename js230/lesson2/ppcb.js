// 1
/*

When clicking elem4, a 'click' event listener is triggered on elem1.
This occurs because elem4 is in elem1's hierarchy. It is the innermost element.

Regarding the 2 event handlers, the first one triggers first.  During bubbling phase we see `elem` w/ the event listener
and what is 'alerted' is the tagName of the `target` 'elem4' and its tagName is 'MAIN'. The second event listener
alerts w/ the `currentTarget`'s tag name which is 'elem1' and its tagName is 'DIV'.  elem1 is also captured during the
'bubbling' phase.

//

let elem1 = document.querySelector('#elem1');

elem1.addEventListener('click', event => alert(event.target.tagName));
elem1.addEventListener('click', event => alert(event.currentTarget.tagName));
*/


// 2
/*

We see the alert for 'capturing' first, then the alert for 'bubbling'.
This is explained simply by the yellow box w/ a tagName of 'MAIN' the innermost element
is a node within the elem1 node hierarchy, and more importantly we use the capture argument
after the callback in our event listener and set it to `true`.  This means that the
second event listener will be captured instead of bubbled, and the way captureing and bubbling work
is that capturing happens first, followed by bubbling, explaining why we see
the "capturing" alert before the "bubbling" alert.

//

let elem1 = document.querySelector('#elem1');

elem1.addEventListener('click', event => alert('bubbling'));
elem1.addEventListener('click', event => alert('capturing'), true);
*/

// 3
/*

Just the elem1 event listener is triggered, and this is because
when we click 'elem3', since it is part of 'elem1''s node hierarchy, elem1 event listener is triggered.
We can think of 'elem4' having not been reached during the capturing and bubbling.

If we were to set either to "on capture" args to 'true' but still clicked the red box '3'
the output would be the same.
//

let elem1 = document.querySelector('#elem1');
let elem4 = document.querySelector('#elem4');

elem1.addEventListener('click', event => alert('Elem1 Listener triggered!'));
elem4.addEventListener('click', event => alert('Elem4 Listener triggered!'));
*/

