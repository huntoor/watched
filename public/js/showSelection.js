const selectedShowType = document.querySelector('#selectShowType');
const showSelectionFrom = document.querySelector('#showSelectionForm');
const movieForm = document.querySelector('#movieForm');
const seriesForm = document.querySelector('#seriesForm');
const matchesForm = document.querySelector('#matchesForm');
const booksForm = document.querySelector('#booksForm');
const nextBtn = document.querySelector('#next');
const prevBtns = document.querySelectorAll('#prev');


const removeHidden = () => {
  if (selectedShowType.value === 'movie') {
    movieForm.classList.remove('hidden');
  } else if (selectedShowType.value === 'series') {
    seriesForm.classList.remove('hidden');
  } else if (selectedShowType.value === 'match') {
    matchesForm.classList.remove('hidden');
  } else if (selectedShowType.value === 'book') {
    booksForm.classList.remove('hidden');
  } else {
    return;
  }
}

const addHidden = () => {
  if (selectedShowType.value === 'movie') {
    movieForm.classList.add('hidden');
  } else if (selectedShowType.value === 'series') {
    seriesForm.classList.add('hidden');
  } else if (selectedShowType.value === 'match') {
    matchesForm.classList.add('hidden');
  } else if (selectedShowType.value === 'book') {
    booksForm.classList.add('hidden');
  } else {
    return;
  }
}

nextBtn.addEventListener('click', (event) => {
  event.preventDefault();
  showSelectionFrom.classList.add('hidden');
  removeHidden();
});

prevBtns.forEach((prevBtn) => {
  prevBtn.addEventListener('click', (event) => {
    event.preventDefault();
    showSelectionFrom.classList.remove('hidden');
    addHidden();
  });
})