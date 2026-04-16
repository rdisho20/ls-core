// #5
/*
const firstBookAfter1950 = library.find(book => book.publicationYear > 1950);
*/

// #8
/*
function something(library) {
  return library
    .filter(book => !book.isAvailable && book.genres.includes('Fiction'))
    .map(book => `${book.title} by ${book.author}`);
}

const library = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genres: ['Fiction', 'Classic'],
    isAvailable: true,
    publicationYear: 1925,
    borrowerId: null,
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genres: ['Fiction', 'Classic', 'Historical'],
    isAvailable: false,
    publicationYear: 1960,
    borrowerId: 101,
  },
  {
    title: '1984',
    author: 'George Orwell',
    genres: ['Dystopian', 'Science Fiction'],
    isAvailable: true,
    publicationYear: 1949,
    borrowerId: undefined,
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genres: ['Fantasy', 'Adventure'],
    isAvailable: false,
    publicationYear: 1937,
    borrowerId: 23,
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genres: ['Classic', 'Romance'],
    isAvailable: true,
    publicationYear: 1813,
    borrowerId: 0,
  }
];

function processLibraryData(books) {
  // Get titles of all available classic books
  const availableClassics = books
    .filter(book => book.isAvailable && book.genres.includes('Classic'))
    .map(book => book.title);

  // Find the first book borrowed by someone (borrowerId is truthy)
  const firstBorrowed = books.find(book => book.borrowerId);

  // Create a summary for each book
  const summaries = [];
  books.forEach(book => {
    const availability = book.isAvailable ? 'In Stock' : 'Checked Out';
    const summary = `${book.title} (${book.publicationYear}) by ${book.author}. Status: ${availability}.`;
    summaries.push(summary);
  });

  return {
    classicTitles: availableClassics,
    firstBorrowedBook: firstBorrowed,
    allSummaries: summaries,
  };
}

const libraryReport = processLibraryData(library);
*/

/*
function concatenate(str1, str2) {
  if (!str2) {
    return function(str) {
      return str1 + str;
    }
  }
  return str1 + str2;
}

console.log(concatenate('ab', 'cd') === 'abcd');            // true
console.log(concatenate('cba', 'xyz') === 'cbaxyz');        // true

const fooCat = concatenate('foo');
console.log(fooCat('bar') === 'foobar');                    // true
console.log(fooCat('xyzzy') === 'fooxyzzy');                // true
*/

/*
function createReport({ title, author, type = "Standard" }) {
  if (!title || !author) {
    return null;
  }

  let reportType = type;

  return `Report: '${title}' by ${author}. Type: ${reportType}`;
}

const config1 = { title: 'Sales Q1', author: 'J. Doe' };
console.log(createReport(config1)); 
// => "Report: 'Sales Q1' by J. Doe. Type: Standard"

const config2 = { title: 'Sales Q2', author: 'A. Smith', type: 'Internal' };
console.log(createReport(config2)); 
// => "Report: 'Sales Q2' by A. Smith. Type: Internal"

const config3 = { title: 'Sales Q3' };
console.log(createReport(config3)); 
// => null
*/

/*
function processEvent([ name, date, ...participants]) {
  return {
    name, date, participants,
  }
}

const event1 = ['Team Meeting', '2023-11-20', 'Alice', 'Bob', 'Charlie'];
console.log(processEvent(event1));
// => { name: 'Team Meeting', date: '2023-11-20', participants: ['Alice', 'Bob', 'Charlie'] }

const event2 = ['Product Launch', '2023-12-01'];
console.log(processEvent(event2));
// => { name: 'Product Launch', date: '2023-12-01', participants: [] }
*/

/*
function createMergedUser(user, session) {
  return {...user, ...session, theme: 'dark'};
}
*/

/*
const users = [
  { id: 101, firstName: 'John', lastName: 'Doe' },
  { id: 102, firstName: 'Jane', lastName: 'Smith' },
];

const newUsers = users.map(({ id, firstName, lastName }) => 
  ({id, displayName: `${firstName} ${lastName}`,})
);

console.log(newUsers);
*/





