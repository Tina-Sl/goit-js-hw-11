export default function getImages(str) {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '44698390-237f634988ff1cc21b0da43c0';

  if (str.includes(' ')) {
    str.replace(/\s+/g, '+');
  }

  const searchParams = new URLSearchParams({
    key: KEY,
    q: str,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 9,
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
