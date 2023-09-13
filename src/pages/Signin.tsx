import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <section>
      <h2>Sign in to do some stuffs</h2>
      <div>
        <div>
          <label htmlFor="email">Enter Email</label>
          <br />
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Enter Password</label>
          <br />
          <input type="password" name="password" id="password" />
        </div>
        <p>
          Don't have an account?{" "}
          <span>
            <Link to="/auth/signup">Register</Link>
          </span>
        </p>
        <button>Login yourself</button>
      </div>
    </section>
  );
};

export default Signin;
