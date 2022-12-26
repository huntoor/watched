const rating = document.querySelector("#rating");
const ratingValue = Number(rating.attributes[2].value)

for (let i = 0; i < ratingValue; i++) {
  rating.innerHTML += '<i class="fa-solid fa-star text-warning"></i>';
}
for (let j = ratingValue; j < 5; j++) {
  rating.innerHTML += '<i class="fa-solid fa-star"></i>';
}

