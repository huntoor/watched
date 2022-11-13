module.exports = ({ title, content }) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- My Stylesheet -->
    <link rel="stylesheet" href="/css/main.css">
  
    <!-- Bootstrap -->
    <link rel="stylesheet" href="/css/bootstrap.css">
  
    <!-- Fontawesome -->
    <script src="https://kit.fontawesome.com/850f2cddad.js" crossorigin="anonymous"></script>
  
    <title>${title}</title>
  </head>
  
  <body>
    <main>
      <header class="mb-5">
        <nav class="navbar navbar-dark bg-primary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <i class="fa-solid fa-film"></i>
              Watched
            </a>
            <a class="btn btn-danger" href="/logout">Logout</a>
          </div>
        </nav>
      </header>

      ${content}
      
    </main>
  </body>
  
  </html>
  `;
}