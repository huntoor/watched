const isWatchedBtns = document.querySelectorAll('#wantToWatch');
const isReadBtns = document.querySelectorAll('#wantToRead');

console.log(isWatchedBtns);

isWatchedBtns.forEach(isWatchedBtn => {
  if (isWatchedBtn.value == 0) {
    isWatchedBtn.classList.add('btn-success');
    isWatchedBtn.innerHTML = 'Watched';
  } else if (isWatchedBtn.value == 1) {
    isWatchedBtn.classList.add('btn-danger');
    isWatchedBtn.innerHTML = 'Want to watch';
  } else {
    isWatchedBtn.innerHTML = "Error";
  }
});

isReadBtns.forEach(isReadBtn => {
  if (isReadBtn.value == 0) {
    isReadBtn.classList.add('btn-success');
    isReadBtn.innerHTML = 'Read';
  } else if (isReadBtn.value == 1) {
    isReadBtn.classList.add('btn-danger');
    isReadBtn.innerHTML = 'Want to Read';
  } else {
    isReadBtn.innerHTML = "Error";
  }
});