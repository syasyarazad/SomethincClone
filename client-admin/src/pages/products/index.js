import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

import TableRowProducts from "../../components/table-row-products";
import { fetchProducts } from "../../store/actions/actionProducts";

export default function ProductsPage() {
  const products = useSelector((state) => state.productsReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className="col-10 m-auto px-md-4" id="product-section">
      <Outlet />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="display-4 fw-semibold">Products</h1>
        <Link
          to={"/product-form"}
          className="btn btn-smtg"
          id="new-product"
        >
          Add New Product
        </Link>
      </div>
      <div className="row">
        <div className="col-12 table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Created By</th>
                <th scope="col" width="150px">
                  Main Image
                </th>
                <th scope="col">Images</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody id="table-product">
              {products?.map((product, i) => {
                return (
                  <TableRowProducts
                    key={product.id}
                    product={product}
                    index={i}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
