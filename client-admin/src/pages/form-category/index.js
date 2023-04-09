import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  addCategory,
  editCategory,
  fetchOneCategory,
} from "../../store/actions/actionCategories";

export default function FormCategoryPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [formCategory, setFormCategory] = useState({
    name: "",
  });

  function handleOnChange(e) {
    setFormCategory({
      ...formCategory,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (id) {
      dispatch(fetchOneCategory(id)).then((result) => {
        setFormCategory({ name: result.name });
      });
    }
  }, [dispatch, id]);

  function handleCategory(e) {
    e.preventDefault();
    if (!id) {
      dispatch(addCategory(formCategory));
    } else {
      dispatch(editCategory(formCategory, id));
    }
    navigate("/categories");
    setFormCategory({ name: "" });
  }

  return (
    <section className="col-10 m-auto px-md-4">
      <div className="d-flex justify-content-center flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        {!id ? (
          <h1 className="display-2">New Category</h1>
        ) : (
          <h1 className="display-2">Edit Category</h1>
        )}
      </div>
      <div className="row">
        <div className="col-12">
          <form onSubmit={handleCategory}>
            <div className="col-12">
              <label htmlFor="category-name">
                Name <span className="text-danger fw-bold">*</span>
              </label>
              <input
                name="name"
                value={formCategory.name}
                onChange={handleOnChange}
                type="text"
                className="form-control"
                id="category-name"
                placeholder="Enter category name"
                autoComplete="off"
                required
              />
            </div>
            <div className="row mt-5 mb-3">
              <div className="col-6">
                <button
                  className="btn btn-lg btn-smtg2 w-100 p-2"
                  id="cancel-add-category"
                  onClick={() => navigate("/categories")}
                >
                  Cancel
                </button>
              </div>
              <div className="col-6">
                <button
                  className="btn btn-lg btn-smtg w-100 p-2"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
