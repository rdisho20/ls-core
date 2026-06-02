document.addEventListener('DOMContentLoaded', async () => {
  let store = document.getElementById('store');
  const BASE_URL = 'https://ls-230-web-store-demo.herokuapp.com';

  async function loadContent(url) {
    let response = await fetch(url);
    store.innerHTML = await response.text();
  }

  await loadContent(`${BASE_URL}/products`);

  store.addEventListener('click', async event => {
    let target = event.target;
    if (target.tagName !== "A") {
      return;
    }

    event.preventDefault();
    let url = BASE_URL + target.getAttribute('href');
    await loadContent(url);
  });

  store.addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.target;
    let data = new FormData(form);

    let response = await fetch(`${BASE_URL}${form.getAttribute('action')}`, {
      method: 'POST',
      body: data,
      headers: {
        Authorization: 'token AUTH_TOKEN',
      }
    });

    store.innerHTML = await response.text();
  })
});