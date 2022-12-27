module.exports = (matches) => {
  return renderMatches = matches.map(match => {
    return `
    <div class="col-3 py-5 mx-5 card text-center shadow p-3 mb-5">
    <div class="card-body">
      <h4 class="card-title">Match</h4>
      <p class="card-text mb-1"><span class="fw-semibold">Team One:   </span>${match.team_one}</p>
      <p class="card-text mb-1"><span class="fw-semibold">Team Two: </span>${match.team_two}</p>
      <p class="card-text mb-1"><span class="fw-semibold">Tournament: </span>${match.tournament}</p>
      <p class="card-text mb-1"><span class="fw-semibold">Stadium: </span>${match.stadium}</p>
      <p class="card-text mb-1"><span class="fw-semibold">Date: </span>${match.date}</p>
      <p class="card-text">${match.match_description}</p>
      <div class="d-flex justify-content-center">
        <form action="/home/review" method="POST">
          <input hidden name="id" value="${match.id}" />
          <input hidden name="table" value="matches" />
          <button class="btn btn-secondary mx-1">Review</button>
        </form>
        <form action="/home/delete" method="POST">
          <input hidden name="id" value="${match.id}" />
          <input hidden name="table" value="matches" />
          <button class="btn btn-secondary mx-1">Delete</button>
        </form>
      </div>
      <div class="mt-3">
        <form action="/home/isWatched" method="POST">
          <input hidden name="id" value="${match.id}" />
          <input hidden name="table" value="matches" />
          <button class="btn mx-1 w-100" id="wantToWatch" value="${match.want_to_watch}"></button>
        </form>
      </div>
    </div>
  </div>
    `;
  }).join("\n");
};


