import templates from './templates.js'

let photos;

const slideshow = {
  init() {
    this.slideshow = document.getElementById('slideshow');
    let slides = this.slideshow.querySelectorAll('figure');
    this.firstSlide = slides[0];
    this.lastSlide = slides[slides.length - 1];
    this.currentSlide = this.firstSlide;
    this.bind();
  },

  prevSlide(event) {
    event.preventDefault();
    let prev = this.currentSlide.previousElementSibling || this.lastSlide;
    this.changeSlide(prev);
  },

  nextSlide(event) {
    event.preventDefault();
    let next = this.currentSlide.nextElementSibling || this.firstSlide;
    this.changeSlide(next);
  },

  changeSlide(newSlide) {
    this.fadeOut(this.currentSlide);
    this.fadeIn(newSlide);
    this.renderPhotoContent(newSlide.getAttribute('data-id'));
    this.currentSlide = newSlide;
  },

  fadeOut(slide) {
    slide.classList.add('hide');
    slide.classList.remove('show');
  },

  fadeIn(slide) {
    slide.classList.remove('hide');
    slide.classList.add('show');
  },

  async renderPhotoContent(idx) {
    renderPhotoInformation(Number(idx));
    let comments = await fetchCommentsFor(idx);
    renderPhotoComments(comments);
  },

  bind() {
    let prevButton = this.slideshow.querySelector('a.prev');
    let nextButton = this.slideshow.querySelector('a.next');
    prevButton.addEventListener('click', event => this.prevSlide(event));
    nextButton.addEventListener('click', event => this.nextSlide(event));
  }
};

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

  slideshow.init();
}

document.addEventListener('DOMContentLoaded', main);

/* My solution

// outside `main
function findVisiblePhoto() {
  const photos = document.querySelector('#slides').children;
  let photo = [...photos].find(photo => getComputedStyle(photo).opacity === '1');
  return photo;
}

function findNewActivePhoto(selection, visiblePhotoId) {
  let newPhotoId;
  let newActivePhoto;
  visiblePhotoId = parseInt(visiblePhotoId, 10);

  console.log(visiblePhotoId);

  if (selection === 'Prev') {
    newPhotoId = visiblePhotoId - 1 <= 0 ? photos.length : visiblePhotoId - 1;
    newActivePhoto = document.querySelector(`[data-id="${newPhotoId}"]`);
  } else if (selection === 'Next') {
    newPhotoId = visiblePhotoId + 1 > photos.length ? 1 : visiblePhotoId + 1;
    newActivePhoto = document.querySelector(`[data-id="${newPhotoId}"]`);
  }

  return newActivePhoto;
}

// inside `main`

  let isAnimating = false;

  document.querySelector('#slides').addEventListener('transitionend', (e) => {
    isAnimating = false;
  });

  document.querySelector('#slideshow ul').addEventListener('click', async (e) => {
    e.preventDefault();

    if (isAnimating === true) {
      return;
    }
    
    isAnimating = true;

    const currentPhoto = findVisiblePhoto();
    console.log('current photo:', currentPhoto);
    const newActivePhoto = findNewActivePhoto(e.target.textContent, currentPhoto.dataset.id);

    currentPhoto.classList.add('hide');
    currentPhoto.classList.remove('show');
    newActivePhoto.classList.add('show');
    newActivePhoto.classList.remove('hide');

    renderPhotoInformation(parseInt(newActivePhoto.dataset.id, 10));

    let comments = await fetchCommentsFor(newActivePhoto.dataset.id);
    renderPhotoComments(comments);
  })

*/
