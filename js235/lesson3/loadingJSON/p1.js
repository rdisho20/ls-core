async function fetchFromGH() {
  try {
    let response = await fetch('hts://api.github.com/repos/rails/rails');
    let data = await response.json();
    console.log(response.status);
    console.log(data.open_issues);
  } catch (error) {
    console.log(error.message);
  }

}

fetchFromGH();