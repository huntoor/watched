const layout = require('../layout');

module.exports = () => {
  return layout({
    title: `Watched | Sign In`,
    content: `
      <div class="container w-25 pt-5">
      <form method="post">
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="text" class="form-control" id="username" name="username" aria-describedby="emailHelp" required>
          <div id="username" class="form-text">We'll share your username with anyone else.</div>
        </div>

        <div class="mb-3">
          <label for="userPass" class="form-label">Password</label>
          <input type="password" class="form-control" id="userPassword" name="password" required>
        </div>

        <button type="submit" class="btn btn-primary mb-2">Submit</button>
      </form>
      
      <a href="/signup">Need an account? Sign Up</a>
    </div>
    `
  })
}





// module.exports = ({ req, errors }) => {
//   return `
//     <!DOCTYPE html>
//     <html lang="en">
    
//     <head>
//       <meta charset="UTF-8">
//       <meta http-equiv="X-UA-Compatible" content="IE=edge">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
//       <!-- Bootstrap -->
//       <link rel="stylesheet" href="/css/bootstrap.css">
    
//       <!-- Fontawesome -->
//       <script src="https://kit.fontawesome.com/850f2cddad.js" crossorigin="anonymous"></script>
    
//       <title>Watched | Sign In</title>
//     </head>
    
//     <body>
//       <main>
//         <header class="mb-5">
//           <nav class="navbar navbar-dark bg-primary">
//             <div class="container-fluid">
//               <a class="navbar-brand" href="#">
//                 <i class="fa-solid fa-film"></i>
//                 Watched
//               </a>
//             </div>
//           </nav>
//         </header>
        
//         <div class="container w-25 pt-5">
//           <form method="post">
//             <div class="mb-3">
//               <label for="userEmail" class="form-label">Email address</label>
//               <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" required>
//               <div id="emailHelp" cl<div class="container w-25 pt-5">
//               <form method="post">
//                 <div class="mb-3">
//                   <label for="userEmail" class="form-label">Email address</label>
//                   <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" required>
//                   <div id="emailHelp" class="form-text">We'll share your email with anyone else.</div>
//                 </div>
        
//                 <div class="mb-3">
//                   <label for="userPassword" class="form-label">Password</label>
//                   <input type="password" class="form-control" id="password" name="password" required>
//                 </div>
        
//                 <button type="submit" class="btn btn-primary mb-2">Submit</button>
//               </form>
              
//               <a href="/signup">Need an account? Sign Up</a>
//             </div>ass="form-text">We'll share your email with anyone else.</div>
//             </div>
    
//             <div class="mb-3">
//               <label for="userPassword" class="form-label">Password</label>
//               <input type="password" class="form-control" id="password" name="password" required>
//             </div>
    
//             <button type="submit" class="btn btn-primary mb-2">Submit</button>
//           </form>
          
//           <a href="/signup">Need an account? Sign Up</a>
//         </div>
    
//       </main>
//     </body>
    
//     </html>
//     `;
// }

