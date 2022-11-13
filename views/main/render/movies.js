module.exports = (movies) => {
  return renderMovies = movies.map(movie => {
    return `
      <div class="col-3 py-5 mx-5 card shadow p-3 mb-5">
        <div class="card-body d-flex flex-column justify-content-around">
          <h5 class="card-title">${movie.movie_name}</h5>
          <p class="card-text">${movie.movie_description}</p>
        </div>
      </div>
    `;
  }).join("\n");
};


