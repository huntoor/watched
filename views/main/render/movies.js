module.exports = (movies) => {
  return renderMovies = movies.map(movie => {
    return `
      <div class="col-3 py-5 mx-5 card shadow p-3 mb-5">
        <div class="card-body d-flex flex-column justify-content-around">
          <h4 class="card-title">Movie</h4>
          <h5 class="card-title">${movie.movie_name}</h5>
          <p class="card-text">${movie.movie_description}</p>
          <div class="d-flex justify-content-center">
            <form action="/home/edit" method="POST">
              <input hidden name="id" value="${movie.id}" />
              <input hidden name="table" value="movies" />
              <button class="btn btn-secondary mx-1">Edit</button>
            </form>
            <form action="/home/delete" method="POST">
              <input hidden name="id" value="${movie.id}" />
              <input hidden name="table" value="movies" />
              <button class="btn btn-secondary mx-1">Delete</button>
            </form>
          </div>
        </div>

      </div>
    `;
  }).join("\n");
};



// <div class="btn-group-sm" role="group" aria-label="Default button group">
// <button type="button" class="btn btn-secondary">Delete</button>
// </div>