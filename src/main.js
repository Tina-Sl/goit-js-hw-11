import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import getImages from './js/pixabay-api.js';
import createMarkup from './js/render-functions.js';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', evt => {
  evt.preventDefault();
  gallery.innerHTML = '';
  const strSearch = evt.target.elements.search.value.trim();
  if (strSearch === '') {
    return;
  }
  loader.classList.remove('loader-hidden');

  getImages(strSearch)
    .then(data => {
      loader.classList.add('loader-hidden');

      if (!data.hits.length) {
        iziToast.error({
          backgroundColor: '#ef4040',
          title: '',
          theme: 'dark',
          // iconUrl: 'images/octagon.png',  не працює на github
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          maxWidth: '350px',
          position: 'topRight',
        });
      }

      gallery.innerHTML = ('beforeend', createMarkup(data.hits));

      const lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
      });
      lightbox.refresh();
    })
    .catch(err => {
      loader.classList.add('loader-hidden');
      console.log(err);
    });
  form.reset();
});
