const animals = [
  {
    name: "Penguin",
    description: `A flightless seabird found almost exclusively in the Southern Hemisphere.
    Penguins are highly adapted for life in the water, with wings that have developed into 
    flippers for swimming and a streamlined body. They have black and white plumage for camouflage while swimming, 
    and they feed on fish, squid, and krill. Many species are known for walking upright on land or sliding on their bellies across ice. `,
    filename: "penguin.png",
  },
  {
    name: "Tiger",
    description: `The tiger is the largest extant cat species in the world, known for its powerful, 
    muscular body and distinctive orange coat with black stripes. Native to Asia, these solitary, 
    nocturnal apex predators are known for their hunting prowess, swimming ability, and unique, 
    individual stripe patterns. They hunt large prey such as deer and wild pigs using ambush tactics. Endangered.`,
    filename: "tiger.jpg",
  },
  {
    name: "Coyote",
    description: `Coyotes (Canis latrans) are medium-sized North American canids, 
    often characterized by a slender muzzle, pointed erect ears, and a bushy, 
    black-tipped tail usually carried downward. They are highly adaptable, 
    omnivorous, and possess a varied, often gray-brown coat.`,
    filename: "coyote.jpg",
  },
]

let animalsFigureset = document.getElementById('animals');

function renderAnimals() {
  animals.forEach(animal => {
    let html = `
      <figure id="${animal.name.toLowerCase()}">
        <img src="${animal.filename}"></img>
        <figcaption>
          <h4>${animal.name}</h4>
          <p>${animal.description}</p>
        </figcaption>
      </figure>
    `;

    animalsFigureset.insertAdjacentHTML('beforeend', html);
  })
}

renderAnimals();

function handleMouseEnter(e) {
  if (e.target.tagName !== 'IMG') return;
  const figure = e.target.parentElement;
  const caption = figure.querySelector('figcaption');
  figure._timer = setTimeout(() => {
    caption.classList.add('show');
    figure._timer = null;
  }, 2000);
}

function handleMouseLeave(e) {
  if (e.target.tagName !== 'IMG') return;
  const figure = e.target.parentElement;
  const caption = figure.querySelector('figcaption');

  if (figure._timer) {
    clearTimeout(figure._timer);
    figure._timer = null;
  }

  caption.classList.remove('show');
}

animalsFigureset.addEventListener('mouseenter', handleMouseEnter, true);
animalsFigureset.addEventListener('mouseleave', handleMouseLeave, true);



