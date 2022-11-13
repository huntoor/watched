const layout = require('../layout');

const renderMovies = require('./render/movies');
const renderSeries = require('./render/series');
const renderMatches = require('./render/matches');

module.exports = (movies, series, matches) => {
  // const renderMovies = movies.map(movie => {
  //    return `
  //    <div class="col-3 py-5 mx-5 card text-center">
  //      <div class="card-body">
  //        <h5 class="card-title">${movie.name}</h5>
  //        <p class="card-text">${movie.description}</p>
  //        <div class="input-group mx-auto w-75 justify-content-center">
  //          <button class="btn btn-outline-primary" type="button" name="decreaseEp">-</button>
  //          <input type="text" class="form-control text-center" placeholder="No of Episodes" name="episodeNo" value="${movie.episodes}">
  //          <button class="btn btn-outline-primary" type="button" name="increaseEp">+</button>
  //        </div>
  //      </div>
  //    </div>
  //    `;
  //  }).join("\n");

  return layout({
    title: 'Watched | Home',
    content: `
    <div class="container pt-5">
      <div class="container overflow-hidden text-center">
        <div class="row gy-5">
          ${renderMovies(movies)}
          ${renderSeries(series)}
          ${renderMatches(matches)}
        </div>
      </div>
    </div>

    <a href="/add" class="floatingBtn">
      <i class="fa-solid fa-plus my-float"></i>
    </a>
    `
  });
};