import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

import TableRowCategories from "../../components/table-row-categories";
import { fetchCategories } from "../../store/actions/actionCategories";

export default function CategoriesPage() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoriesReducer.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <section className="col-10 m-auto px-md-4" id="product-section">
      <Outlet />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="display-4 fw-semibold">Categories</h1>
        <Link
          to={"/category-form"}
          className="btn btn-smtg"
          id="new-product"
        >
          Add New Category
        </Link>
      </div>
      <div className="row">
        <div className="col-12 table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Created At</th>
                <th scope="col">Updated At</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody id="table-product">
              {categories?.map((category, i) => {
                return (
                  <TableRowCategories
                    key={category.id}
                    category={category}
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
