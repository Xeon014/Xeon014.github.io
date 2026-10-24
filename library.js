// Optional cover images sit over the title cover; failed images reveal the fallback.
for (const cover of document.querySelectorAll('.cover[data-cover]')) {
  const image = document.createElement('img');
  image.alt = '';
  image.hidden = true;
  image.addEventListener('load', () => { image.hidden = false; });
  image.addEventListener('error', () => { image.hidden = true; });
  image.src = cover.dataset.cover;
  cover.append(image);
}
