import { Link } from "react-router-dom";
import toRupiah from "../../helpers/toRupiah";

export default function ProductCard({ product }) {
  return (
    <div className="col-lg-3">
      <div className="item">
        <div className="thumb">
          <div className="hover-content">
            <ul className="p-0">
              <li>
                <Link to={`/products/${product.id}`} href="single-product.html">
                  <i className="fa fa-eye"></i>
                </Link>
              </li>
            </ul>
          </div>
          <img src={product.mainImg} alt="Product Image" />
        </div>
        <div className="down-content d-flex justify-content-center">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <h4>{product.name}</h4>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <span>{toRupiah(product.price)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
