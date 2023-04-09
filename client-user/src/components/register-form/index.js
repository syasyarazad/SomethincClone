import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../store/actions/actionUsers";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [formRegister, setFormRegister] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  function handleRegister(e) {
    e.preventDefault();
    dispatch(register(formRegister));
    setFormRegister({
      username: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
    });
  }

  function handleOnChange(e) {
    setFormRegister({ ...formRegister, [e.target.name]: e.target.value });
  }

  return (
    <form className="mx-1 mx-md-4" onSubmit={handleRegister}>
      <div className="d-flex flex-row align-items-center mb-4">
        <div className="form-outline flex-fill mb-0">
          <label className="form-label" htmlFor="form3Example1c">
            Username
          </label>
          <input
            name="username"
            onChange={handleOnChange}
            value={formRegister.username}
            type="text"
            id="form3Example1c"
            className="form-control"
          />
        </div>
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
        <div className="form-outline flex-fill mb-0">
          <label className="form-label" htmlFor="form3Example3c">
            Email
          </label>
          <input
            name="email"
            onChange={handleOnChange}
            value={formRegister.email}
            type="email"
            id="form3Example3c"
            className="form-control"
          />
        </div>
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
        <div className="form-outline flex-fill mb-0">
          <label className="form-label" htmlFor="form3Example4c">
            Password
          </label>
          <input
            name="password"
            onChange={handleOnChange}
            value={formRegister.password}
            type="password"
            id="form3Example4c"
            className="form-control"
          />
        </div>
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
        <div className="form-outline flex-fill mb-0">
          <label className="form-label" htmlFor="form3Example5c">
            Phone Number
          </label>
          <input
            name="phoneNumber"
            onChange={handleOnChange}
            value={formRegister.phoneNumber}
            type="number"
            id="form3Example5c"
            className="form-control"
          />
        </div>
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
        <div className="form-outline flex-fill mb-0">
          <label className="form-label" htmlFor="form3Example6c">
            Address
          </label>
          <input
            name="address"
            onChange={handleOnChange}
            value={formRegister.address}
            type="text"
            id="form3Example6c"
            className="form-control"
          />
        </div>
      </div>

      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
        <button type="submit" className="btn btn-smtg btn-lg">
          Register
        </button>
      </div>
    </form>
  );
}
