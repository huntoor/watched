const layout = require('../layout');

module.exports = () => {
  return layout({
    title: 'Watched | Add',
    content: `
    <div class="container pt-5 w-25">
      <form action="" class="text-bg-light p-3" id="showSelectionForm">
        <select class="form-select" aria-label="Default select example" id="selectShowType">
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="match">Match</option>
          <option value="book">Book</option>
        </select>
        <div class="d-md-flex justify-content-md-end mt-3">
          <button class="btn btn-primary" id="next">Next</button>
        </div>
      </form>

      <form action="" class="text-bg-light p-3 hidden" method="post" id="movieForm">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="movie_name" name="movie_name" placeholder="Movie Name" required>
          <label for="movie_name">Movie Name</label>
        </div>
        <div class="form-floating">
          <textarea type="text" class="form-control" id="movie_description" name="movie_description"
            placeholder="Movie Description" style="height: 100px;"></textarea>
          <label for="movie_description">Movie Description</label>
        </div>
        <div class="d-md-flex justify-content-md-between mt-3">
          <button class="btn btn-secondary" id="prev">Previous</button>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>

      <form action="" class="text-bg-light p-3 hidden" method="post" id="seriesForm">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="series_name" name="series_name" placeholder="Movie Name" required>
          <label for="series_name">Series Name</label>
        </div>
        <div class="form-floating mb-3">
          <textarea type="text" class="form-control" id="series_description" name="series_description"
            placeholder="Series Description" style="height: 100px;"></textarea>
          <label for="series_description">Series Description</label>
        </div>
        <div class="form-floating">
          <input type="number" class="form-control" id="watched_episodes" name="watched_episodes"
            placeholder="Number Of Episodes Watched" required>
          <label for="watched_episodes">Number Of Episodes Watched</label>
        </div>
        <div class="d-md-flex justify-content-md-between mt-3">
          <button class="btn btn-secondary" id="prev">Previous</button>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>

      <form action="" class="text-bg-light p-3 hidden" method="post" id="matchesForm">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="team_one" name="team_one" placeholder="Team One" required>
          <label for="team_one">Team One</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="team_two" name="team_two" placeholder="Team Two" required>
          <label for="team_two">Team Two</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="team_two" name="tournament" placeholder="Tournament" required>
          <label for="tournament">Tournament</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="stadium" name="stadium" placeholder="Stadium">
          <label for="stadium">Stadium</label>
        </div>
        <div class="form-floating mb-3">
          <input type="date" class="form-control" id="match_date" name="match_date" placeholder="Match Date" required />
          <label for="match_date">Match Date</label>
        </div>
        <div class="form-floating mb-3">
          <textarea type="text" class="form-control" id="match_description" name="match_description"
            placeholder="Match Description" style="height: 100px;"></textarea>
          <label for="match_description">Match Description</label>
        </div>

        <div class="d-md-flex justify-content-md-between mt-3">
          <button class="btn btn-secondary" id="prev">Previous</button>
          <button type="submit" class="btn btn-primary" id="sub">Submit</button>
        </div>
      </form>

      <form action="" class="text-bg-light p-3 hidden" method="post" id="booksForm">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="book_name" name="book_name" placeholder="Book Name" required>
          <label for="book_name">Book Name</label>
        </div>

        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="book_auther" name="book_auther" placeholder="Book Auther" required>
          <label for="book_auther">Book Auther</label>
        </div>
        
        <div class="form-floating">
          <textarea type="text" class="form-control" id="book_description" name="book_description"
            placeholder="Book Description" style="height: 100px;"></textarea>
          <label for="book_description">Book Description</label>
        </div>
        <div class="d-md-flex justify-content-md-between mt-3">
          <button class="btn btn-secondary" id="prev">Previous</button>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
      <script src="./js/showSelection.js"></script>
    </div>
    `
  });
}