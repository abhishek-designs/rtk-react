import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section>
      <h2>Sign up to explore stuffs</h2>
      <div>
        <div>
          <label htmlFor="username">Enter Username</label>
          <br />
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="email">Enter Email</label>
          <br />
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Create Password</label>
          <br />
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <label htmlFor="cpassword">Confirm Password</label>
          <br />
          <input type="password" name="cpassword" id="cpassword" />
        </div>
        <br />
        <p>
          Already have an account?{" "}
          <span>
            <Link to="/auth/signin">Login</Link>
          </span>
        </p>
        <br />
        <button>Register yourself</button>
      </div>
    </section>
  );
};

export default Signup;
