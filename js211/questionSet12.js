/*
// 1
function findUserById(users, userId) {
  if (users.length === 0) {
    return undefined;
  }

  return users.find(user => user.id === userId);
}

let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Diana' }
];

console.log(findUserById(users, 3)); // Expected output: { id: 3, name: 'Charlie' }
console.log(findUserById(users, 5)); // Expected output: undefined
console.log(findUserById([], 1));   // Expected output: undefined
*/


/*
// 2
function findProductByName(products, name) {
  name = name.toLowerCase();
  return products.find(product => product.productName.toLowerCase() === name);
}

let products = [
  { productName: 'Laptop', price: 1200 },
  { productName: 'Mouse', price: 25 },
  { productName: 'Keyboard', price: 75 },
  { productName: 'Monitor', price: 300 }
];

console.log(findProductByName(products, 'Mouse'));     // Expected output: { productName: 'Mouse', price: 25 }
console.log(findProductByName(products, 'keyboard'));  // Expected output: { productName: 'Keyboard', price: 75 }
console.log(findProductByName(products, 'Webcam'));    // Expected output: undefined
*/


/*
// 3
function findFirstAvailableBook(library) {
  return library.find(book => book.isAvailable === true);
}

let library = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isAvailable: false },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', isAvailable: true },
  { title: '1984', author: 'George Orwell', isAvailable: false },
  { title: 'Pride and Prejudice', author: 'Jane Austen', isAvailable: true }
];

console.log(findFirstAvailableBook(library)); // Expected output: { title: 'To Kill a Mockingbird', author: 'Harper Lee', isAvailable: true }

let allBooksUnavailable = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isAvailable: false },
  { title: '1984', author: 'George Orwell', isAvailable: false },
];
console.log(findFirstAvailableBook(allBooksUnavailable)); // Expected output: undefined
*/


/*
// 6
function findProjectWithPendingTask(projects, taskId) {
  return projects.find(project => {
    return project.tasks.find(task => {
      if (task.taskId === taskId && task.status === 'pending') {
        return true;
      }
    });
  });
}

let projects = [
  {
    projectName: 'Website Redesign',
    tasks: [
      { taskId: 101, description: 'Design mockups', status: 'completed' },
      { taskId: 102, description: 'Develop homepage', status: 'in-progress' },
      { taskId: 103, description: 'Setup analytics', status: 'pending' }
    ]
  },
  {
    projectName: 'API Integration',
    tasks: [
      { taskId: 201, description: 'Auth endpoint', status: 'completed' },
      { taskId: 202, description: 'Data sync script', status: 'pending' },
      { taskId: 203, description: 'Write documentation', status: 'pending' }
    ]
  },
  {
    projectName: 'Mobile App Launch',
    tasks: [
      { taskId: 301, description: 'Final QA', status: 'in-progress' },
      { taskId: 302, description: 'Submit to App Store', status: 'pending' }
    ]
  }
];

console.log(findProjectWithPendingTask(projects, 202));
// Expected output: { projectName: 'API Integration', tasks: [...] }

console.log(findProjectWithPendingTask(projects, 101));
// Expected output: undefined (because task 101's status is 'completed')

console.log(findProjectWithPendingTask(projects, 999));
// Expected output: undefined (because taskId 999 does not exist)
*/



// 7
/*

*/
// /report/i.test(string)
function findFileByCriteria(files, criteria) {
  if (Object.keys(criteria).length === 0) {
    return undefined;
  }

  return files.find(file => {
    //const criterionPassed = true;

    for (let key of Object.keys(criteria)) {
      console.log(key);
      if (key === 'name') {
        if (!/report/i.test(file[key])) {
          return false
        }
      }
      if (criteria[key] !== file[key]) {
        return false;
      }
    }

    return true;
  })
}

let fileSystem = [  
  { name: 'Annual-Report-2023.pdf', type: 'pdf', size: 1200 },  
  { name: 'presentation-draft.pptx', type: 'pptx', size: 5400 },  
  { name: 'team-photo.jpg', type: 'jpg', size: 2100 },  
  { name: 'quarterly_report_Q2.pdf', type: 'pdf', size: 850 },  
  { name: 'notes.txt', type: 'txt', size: 15 }  
];

console.log(findFileByCriteria(fileSystem, { type: 'pdf', name: 'report' }));  
// Expected output: { name: 'Annual-Report-2023.pdf', type: 'pdf', size: 1200 }  
  
console.log(findFileByCriteria(fileSystem, { name: 'PHOTO', type: 'jpg' }));  
// Expected output: { name: 'team-photo.jpg', type: 'jpg', size: 2100 }  
  
console.log(findFileByCriteria(fileSystem, { type: 'pdf', name: 'draft' }));  
// Expected output: undefined  
  
console.log(findFileByCriteria(fileSystem, {}));  
// Expected output: undefined  