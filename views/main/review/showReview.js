const layout = require('../../layout');

module.exports = (name, review, rating) => {
  return layout({
    title: "Watched | Show Review",
    content: `
    <div class="col-3 py-5 mx-auto card shadow p-3 mb-5">
      <a href="/home"><button class="btn btn-secondary">< Back</button></a>
      <div class="card-body d-flex flex-column justify-content-around text-center">
        <h3 class="card-title">${name}</h3>
        <h5 class="card-title">Review: ${review}</h5>
        <h5 class="card-title" id="rating" value="${rating}"></h5>
      </div>

      <script src="/js/review.js"></script>
    </div>
    `
  });
}