import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../../components/preloader";

import ProductCard from "../../components/product-card";
import { fetchProducts } from "../../store/actions/actionProducts";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.products);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchProducts()).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <section className="section mt-4" id="products">
      {loading ? <Preloader /> : <></>}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>Our Latest Products</h2>
              <span>Check out all of our products.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {products?.map((el) => {
            return <ProductCard key={el.id} product={el} />;
          })}
        </div>
      </div>
      <div className="col-lg-12">
        <div className="pagination">
          <ul>
            <a className="active" href="#">
              Back to Top
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
}
