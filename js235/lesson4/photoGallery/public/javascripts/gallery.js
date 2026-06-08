import templates from './templates.js'

let photos;

async function fetchPhotos() {
  const response = await fetch('/photos');
  return response.json();
}

function renderPhotos() {
  const slides = document.getElementById('slides');
  slides.innerHTML = templates.photos(photos);
}

function renderPhotoInformation(photoId) {
  let photo = photos.find(item => item.id === photoId);
  const header = document.getElementById('information');
  header.innerHTML = templates.photoInformation(photo);
}

async function fetchCommentsFor(photoId) {
  const response = await fetch(`/comments?photo_id=${photoId}`);
  return response.json();
}

function renderPhotoComments(comments) {
  const commentList = document.querySelector('#comments ul');
  commentList.innerHTML = templates.comments(comments);
}

async function main() {
  photos = await fetchPhotos();
  let activePhotoId = photos[0].id;
  renderPhotos();
  renderPhotoInformation(activePhotoId);

  let comments = await fetchCommentsFor(activePhotoId);
  renderPhotoComments(comments);

  document.querySelector('#slideshow ul').addEventListener('click', (e) => {
    function findVisiblePhoto() {
      const photos = document.querySelector('#slides').children;
      const photo = [...photos].find(photo => getComputedStyle(photo).opacity === '1');
      return photo;
    }

    const currentPhoto = findVisiblePhoto();
    /*
    [DONE] get 'forefront' photo 
      given the target, move up parent to `#slideshow` then, queryselect slides and get `children`
      find the element w/ the opacity of '1' and get its id
      now you have currently visible photo

    [ACTIVE] Given the currently visible photo, determine next/previous based on id
      toggle current photo's opacity to 0, next/previous photo to 1 (HELPER: findNewActivePhoto)

      (HELPER) to findNewActivePhoto, input string 'next' or 'prev', and current visible photo's id
        then using the dataset, find newActivePhoto based on id (sub 1 / add 1) and toggle opacity to '1'

    FUTURE animation classes:
    #slides .hide {
      opacity: 0;
      transition: opacity 800ms;
    }

    #slides .show {
      opacity: 1;
      transition: opacity 800ms;
    }
    */
    if (e.target.textContent === 'Prev') {
      // ..
    } else if (e.target.textContent === 'Next') {
      // ..
    }
  })
}

document.addEventListener('DOMContentLoaded', main);
