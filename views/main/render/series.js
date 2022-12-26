module.exports = (series) => {
  return renderMovies = series.map(s => {
    return `
      <div class="col-3 py-5 mx-5 card text-center shadow p-3 mb-5">
        <div class="card-body d-flex flex-column justify-content-around">
          <h4 class="card-title">Series</h4>
          <h5 class="card-title">${s.series_name}</h5>
          <p class="card-text">${s.series_description}</p>
          <div class="input-group mx-auto w-75 justify-content-center">
            <input type="number" class="form-control text-center" placeholder="No of Episodes" name="episodeNo" value="${s.watched_episodes}" disabled>
          </div>
          <div class="d-flex justify-content-center my-3">
            <form action="/home/review" method="POST">
              <input hidden name="id" value="${s.id}" />
              <input hidden name="name" value="${s.series_name}" />
              <input hidden name="table" value="series" />
              <button class="btn btn-secondary mx-1">Review</button>
            </form>
            <form action="/home/delete" method="POST">
              <input hidden name="id" value="${s.id}" />
              <input hidden name="table" value="series" />
              <button class="btn btn-secondary mx-1">Delete</button>
            </form>
          </div>
        </div>
      </div>
    `;
  }).join("\n");
};