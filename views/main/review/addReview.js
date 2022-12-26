const layout = require('../../layout');

module.exports = (name, userID, id, table ) => {
  return layout({
    title: "Watched | Add Review",
    content: `
    <div class="container pt-5 w-25">
      <form action="" class="text-bg-light p-3" method="post" id="movieReviewForm">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="name" name="name" placeholder="Name" value="${name}" required>
          <label for="name">Name</label>
        </div>
        <div class="form-floating">
          <textarea type="text" class="form-control" id="review" name="review"
            placeholder="Review" style="height: 100px;" required></textarea>
          <label for="review">Review</label>
        </div>
        <div class="mt-3 bg-white p-3 border rounded">
          <label for="movie_rating" class="form-label">Rating</label>
          <input type="range" class="form-range" min="0" max="5" id="rating" name="rating">
        </div>
        <div class="d-md-flex justify-content-md-between mt-3">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
        <input hidden name="id" value="${id}"/>
        <input hidden name="userID" value="${userID}"/>
        <input hidden name="table" value="${table}"/>
      </form>
    </div>
    `
  });
}