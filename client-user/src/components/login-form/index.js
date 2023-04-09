import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../store/actions/actionUsers";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  function handleLogin(e) {
    e.preventDefault();
    dispatch(login(formLogin)).then((result) => {
      if (result.msg) {
        navigate("/");
      }
    });
    setFormLogin({
      email: "",
      password: "",
    });
  }

  function handleOnChange(e) {
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form3Example3">
            Email address
          </label>
          <input
            onChange={handleOnChange}
            value={formLogin.email}
            name="email"
            type="email"
            id="form3Example3"
            className="form-control form-control-lg"
            placeholder="Enter a valid email address"
          />
        </div>

        <div className="form-outline mb-3">
          <label className="form-label" htmlFor="form3Example4">
            Password
          </label>
          <input
            onChange={handleOnChange}
            value={formLogin.password}
            name="password"
            type="password"
            id="form3Example4"
            className="form-control form-control-lg"
            placeholder="Enter password"
          />
        </div>

        <div className="text-center text-lg-start mt-4 pt-2">
          <button
            type="submit"
            className="btn btn-smtg btn-lg"
            style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
          >
            Login
          </button>
          <p className="small mt-2 pt-1 mb-0">
            Don't have an account?
            <Link to={"/register"} className="link-danger mx-1">
              Register
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}
