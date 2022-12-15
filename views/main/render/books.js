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
          <form action="/home/edit" method="POST">
            <input hidden name="id" value="${book.id}" />
            <input hidden name="table" value="books" />
            <button class="btn btn-secondary mx-1">Edit</button>
          </form>
          <form action="/home/delete" method="POST">
            <input hidden name="id" value="${book.id}" />
            <input hidden name="table" value="books" />
            <button class="btn btn-secondary mx-1">Delete</button>
          </form>
        </div>
      </div>

    </div>

    `
  })
}