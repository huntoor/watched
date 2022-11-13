const layout = require('../layout');

module.exports = () => {
  return layout({
    title: `Watched | Sign Up`,
    content: `
    <div class="container w-25 pt-5 ">
      <form action="" class="row g-3" method="post">
        <div class="col-md-6">
          <label for="first_name" class="form-label">First name</label>
          <input type="text" class="form-control" name="firstName" id="first_name" required>
        </div>

        <div class="col-md-6">
          <label for="last_name" class="form-label">Last name</label>
          <input type="text" class="form-control" name="lastName" id="last_name" required>
        </div>

        <div class="col-md-12">
          <label for="username" class="form-label">Username</label>
          <input type="text" class="form-control" name="username" id="username" required>
        </div>

        <div class="col-md-12">
          <label for="userPass" class="form-label">Password</label>
          <input type="password" class="form-control" name="userPassword" id="userPass" required>
        </div>

        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
            <label class="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>

        <div class="col-12">
          <button class="btn btn-primary w-100" type="submit">Sign Up</button>
        </div>
      </form>
    </div>
    `
  })
}