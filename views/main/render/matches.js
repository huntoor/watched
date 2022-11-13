module.exports = (matches) => {
  return renderMatches = matches.map(match => {
    return `
    <div class="col-3 py-5 mx-5 card text-center shadow p-3 mb-5">
    <div class="card-body">
      <h5 class="card-title">Match</h5>
      <p class="card-text mb-1"><span class="fw-semibold">Team One:   </span>${match.team_one}</p>
      <p class="card-text mb-1"><span class="fw-semibold">Team Two: </span>${match.team_two}</p>
      <p class="card-text mb-1"><span class="fw-semibold">Tournament: </span>${match.tournament}</p>
      <p class="card-text mb-1"><span class="fw-semibold">Stadium: </span>${match.stadium}</p>
      <p class="card-text mb-1"><span class="fw-semibold">Date: </span>${match.date}</p>
      <p class="card-text">${match.match_description}</p>
    </div>
  </div>
    `;
  }).join("\n");
};


