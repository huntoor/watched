module.exports = (books) => {
  return renderBooks = books.map(book => {
    return `
    <div class="col-3 py-5 mx-5 card shadow p-3 mb-5">
      <div class="card-body d-flex flex-column justify-content-around">
        <h4 class="card-title">Book</h4>
        <h5 class="card-title">${book.book_name}</h5>
        <h5 class="card-title">written by: ${book.book_auther}</h5>
        <p class="card-text">${book.book_description}</p>
        <div class="d-flex justify-content-center">
          <form action="/home/review" method="POST">
            <input hidden name="id" value="${book.id}" />
            <input hidden name="name" value="${book.book_name}" />
            <input hidden name="table" value="books" />
            <button class="btn btn-secondary mx-1">Review</button>
          </form>
          <form action="/home/delete" method="POST">
            <input hidden name="id" value="${book.id}" />
            <input hidden name="table" value="books" />
            <button class="btn btn-secondary mx-1">Delete</button>
          </form>
        </div>
        <div class="mt-3">
        <form action="/home/isWatched" method="POST">
          <input hidden name="id" value="${book.id}" />
          <input hidden name="table" value="books" />
          <button class="btn mx-1 w-100" id="wantToRead" value="${book.want_to_read}"></button>
        </form>
      </div>
      </div>

    </div>

    `
  })
}