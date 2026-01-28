/*
-P
input:
output: string of data

-D
array -> object -> object w/ dates

-A
split the emails & map them to a dictionary w/ keys as numbers 1 - however many
for each email, split the values into parts
  to prepare for split, replace w/ match /(\\n|:)/g ... ''
  for each part, regex split to get key, value pair w/ 


*/
var emailData = "From: foo@bar.com#/#\nSubject: Nunc in justo eros. Aliquam.#/#\nDate: 07-27-2016#/#\nTo: foo@bar.com#/#\nEtiam convallis commodo tortor, dapibus auctor dolor semper consequat. Sed lobortis eros nec ante porta, eu placerat sapien interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi consectetur et odio vitae volutpat. Curabitur imperdiet orci metus, et dignissim nisl lacinia non. Aenean volutpat diam in lorem iaculis, sit amet volutpat nibh dictum. Quisque vel vulputate nisi. Nam a vestibulum turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum leo id velit aliquet, at vestibulum ipsum molestie. Cras eu lobortis libero. In rutrum non leo id ultricies. Aliquam in ex ut nibh placerat sollicitudin vitae id magna.##||##\n\nFrom: baz@foo.com#/#\nSubject: Aenean cursus velit non arcu.#/#\nDate: 08-11-2016#/#\nTo: baz@foo.com#/#\nCras ex leo, faucibus id mollis a, dignissim sit amet metus. Sed dui massa, mollis in tristique ut, auctor quis tortor. Donec egestas velit purus, eget laoreet urna venenatis id. Etiam eget ultrices tortor. Duis venenatis leo mi, non porta est molestie at. Nulla lacus nisl, dapibus convallis massa ut, dignissim euismod lacus. Ut vel magna lectus. Morbi sit amet vulputate arcu. Cras non ante arcu. Nam tempor iaculis ipsum eget tincidunt. Praesent imperdiet varius dui, vel egestas ipsum porta in. Sed suscipit massa in neque lobortis congue.##||##\n\nFrom: qux@bar.com#/#\nSubject: Sed hendrerit felis in ex.#/#\nDate: 06-25-2016#/#\nTo: qux@bar.com#/#\nNulla quis est vitae orci tincidunt convallis sit amet ut libero. Sed eu facilisis justo. Maecenas sed ultrices urna. Sed malesuada justo sed magna sodales, eget congue dolor convallis. Vestibulum vel consectetur nunc. Morbi at tincidunt turpis, eget imperdiet orci. Curabitur laoreet ipsum a quam facilisis, eu aliquet lectus viverra. Maecenas ullamcorper rutrum dui, ac aliquet mi pulvinar sit amet.##||##\n\nFrom: quux@foo.com#/#\nSubject: Curabitur tincidunt elit nec risus.#/#\nDate: 07-24-2016#/#\nTo: quux@foo.com#/#\nCurabitur interdum dictum consectetur. Nulla facilisi. Quisque sed tellus consectetur, vestibulum quam sed, lacinia mauris. Nunc risus dolor, feugiat nec erat at, elementum tempor urna. Vivamus facilisis elementum congue. Cras dui libero, vehicula eget porttitor sed, sagittis quis dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam lacinia nulla nisi, vel finibus ligula sodales quis. Maecenas vulputate, leo auctor venenatis pretium, lectus elit eleifend odio, nec molestie ligula ex eget tellus. Nullam a nibh ut enim efficitur elementum. Nunc non elit vitae tortor iaculis ornare in id risus. Integer finibus lobortis lorem, id rutrum elit congue id. In hac habitasse platea dictumst.##||##\n\nFrom: garply@foo.com#/#\nSubject: Integer nec nunc facilisis, ultricies.#/#\nDate: 07-03-2016#/#\nTo: garply@foo.com#/#\nFusce rhoncus purus nisi, vel blandit felis fermentum sed. Vestibulum ultricies rutrum dui nec vehicula. Proin quis semper nulla. Maecenas congue, leo nec feugiat dapibus, dui metus facilisis elit, non finibus leo nisl at est. Donec varius, turpis non pulvinar sodales, nulla nulla posuere ligula, nec eleifend quam metus ut tortor. Sed semper vestibulum mattis. Nullam et ornare eros. Aliquam sed pellentesque dui, ut consequat neque. Integer luctus turpis ultrices, congue erat mattis, vehicula tellus. Pellentesque tincidunt posuere nibh pretium tincidunt. In hac habitasse platea dictumst.";

function getDates(emailData) {
  const dates = [];

  for (let key of Object.keys(emailData)) {
    dates.push(emailData[key].Date);
  }

  return dates;
}

function datesSorted(dates) {
  const dateObjects = [];

  for (let i = 0; i < dates.length; i += 1) {
    let date = dates[i]
    date = date.split('-');
    [month, day, year] = date
    dateObjects[i] = new Date(
      parseInt(year, 10),
      parseInt(month, 10) - 1,
      parseInt(day, 10)
    );
  }

  dateObjects.sort((a, b) => a.getTime() - b.getTime());

  return dateObjects;
}

function mailCount(emailData) {
  const emailsSplit = emailData.split(/##\|\|##/);
  const emailsMapped = {};

  emailsSplit.forEach((email, index) => {
    emailsMapped[index + 1] = email;
  });

  for (let key of Object.keys(emailsMapped)) {
    const email = emailsMapped[key];
    const parts = email.split(/#\/#/);
    emailsMapped[key] = {};
    
    for (let part of parts) {
      part = part.split(':');
      part[0] = part[0].replace(/\n/g, '');
      
      if (part.length === 2) {
        part[1] = part[1].replace(' ', '');
        emailsMapped[key][part[0]] = part[1];
      } else {
        emailsMapped[key].Body = part[0];
      }
    }
  }

  const dates = getDates(emailsMapped);
  const emailsDatesSorted = datesSorted(dates);
  const first = emailsDatesSorted[0]
    .toString()
    .split(' ')
    .slice(0, 4)
    .join(' ');
  const last = emailsDatesSorted[emailsDatesSorted.length - 1]
    .toString()
    .split(' ')
    .slice(0, 4)
    .join(' ');
  console.log(`Count of Email: ${Object.keys(emailsMapped).length}`);
  console.log(`Date Range: ${first} - ${last}`);
}

mailCount(emailData);

// console output
/*
Count of Email: 5
Date Range: Sat Jun 25 2016 - Thu Aug 11 2016
*/

/* LSBot
// Your current logic:

part = part.split(':');

if (part.length === 2) {
  // treat as "Label: Value"
} else {
  emailsMapped[key].Body = part[0];
}

// What happens:

// For a normal header line like "Subject: Hello" → ['Subject', ' Hello'] (length 2) → fine.
// For a body line like "Body: this: has: colons" → ['Body', ' this', ' has', ' colons'] (length 4)
// You go to the else branch and set Body = part[0] → "Body" only. You lose the actual body text.
// Safer version:

let [label, ...rest] = part.split(':'); // label = first piece, rest = all the rest
label = label.replace(/\n/g, '');
let value = rest.join(':');            // put the rest back together, including colons

if (rest.length) {                     // there was at least one ':'
  emailsMapped[key][label] = value.trim();
} else {                               // no colon at all
  emailsMapped[key].Body = label;
}

// Key difference: instead of throwing away everything after the second :,
// we preserve all text after the first : by joining rest back with :.
*/