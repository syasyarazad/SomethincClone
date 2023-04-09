import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

export default function BaseLayout() {
  return (
    <>
      <header className="container">
        <Navbar />
      </header>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
