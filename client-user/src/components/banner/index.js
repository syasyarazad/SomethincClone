import { Link } from "react-router-dom";

export default function Banner({ image }) {
  return (
    <div
      className="p-5 text-center bg-image mt-4 d-flex justify-content-center align-items-end"
      style={{
        backgroundImage: `url(${image})`,
        height: "345px",
        backgroundSize: "cover",
      }}
    >
      <Link to={"/products"}>
        <button
          type="button"
          className="btn btn-light fw-bold"
          data-mdb-ripple-color="dark"
        >
          Shop now
        </button>
      </Link>
    </div>
  );
}
