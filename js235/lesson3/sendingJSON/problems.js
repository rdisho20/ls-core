// 1
/*
async function postData() {
  let data = { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' };
  let json = JSON.stringify(data);

  let response = await fetch('https://lsjs230-book-catalog.herokuapp.com/books', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
    body: json,
  });

  if (response.status === 201) {
    console.log(`This book was added: ${await response.text()}`)
  }
}

postData();
*/

/*
POST /books HTTP/1.1
Host: lsjs230-book-catalog.herokuapp.com
Content-Type: application/json; charset=utf-8

{"title": "Eloquent JavaScript", "author": "Marijn Haverbeke"}
*/

async function createProduct() {
  let data = {
    name: 'Hum-diddly-scrumptious cakes',
    sku: 'thisskuissuperunique',
    price: 9001,
  };
  let json = JSON.stringify(data);

  let response = await fetch('https://ls-230-web-store-demo.herokuapp.com/v1/products', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'Authorization': 'token AUTH_TOKEN',
    },
    body: json,
  });

  if (response.status === 201) {
    console.log(`This product was added: ${await response.text()}`)
  }
}

createProduct();
