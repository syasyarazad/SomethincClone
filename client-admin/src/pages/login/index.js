import image from "../../assets/somethinc-alpha.webp";
import LoginForm from "../../components/login-form";
export default function LoginPage() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#ede6fd" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "5px" }}>
              <div className="row d-flex justify-content-center align-items-center h-100 p-5">
                <div className="col-md-9 col-lg-6 col-xl-5">
                  <img src={image} className="img-fluid" alt="Login" />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
