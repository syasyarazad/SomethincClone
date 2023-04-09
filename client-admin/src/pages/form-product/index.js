import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCategories } from "../../store/actions/actionCategories";
import {
  editProduct,
  addProduct,
  fetchOneProduct,
} from "../../store/actions/actionProducts";

export default function FormProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const [formProduct, setFormProduct] = useState({
    name: "",
    categoryId: "",
    price: "",
    description: "",
    mainImg: "",
  });

  useEffect(() => {
    dispatch(fetchCategories());
    if (id) {
      dispatch(fetchOneProduct(id)).then((result) => {
        setFormProduct(result);
        console.log(result);
      });
    }
  }, [dispatch, id]);

  const [images, setImages] = useState([
    { imgUrl: "" },
    { imgUrl: "" },
    { imgUrl: "" },
    { imgUrl: "" },
  ]);

  function resetData() {
    setFormProduct({
      name: "",
      categoryId: "",
      price: "",
      description: "",
      mainImg: "",
    });
    setImages([{ imgUrl: "" }, { imgUrl: "" }, { imgUrl: "" }, { imgUrl: "" }]);
  }

  function handleProduct(e) {
    e.preventDefault();
    if (!id) {
      dispatch(addProduct({ ...formProduct, images })).then((res) => {
        if (res) {
          navigate("/");
          resetData();
        }
      });
    } else {
      dispatch(editProduct(formProduct, id)).then((res) => {
        if (res === "Success to update Product") {
          navigate("/");
          resetData();
        }
      });
    }
  }

  function handleOnChange(e) {
    setFormProduct({
      ...formProduct,
      [e.target.name]: e.target.value,
    });
  }

  function handleOnChangeImages(e) {
    let temp = [...images];
    temp.forEach((el, i) => {
      if (e.target.name === `image${i + 1}`) {
        temp[i] = { imgUrl: e.target.value };
      }
    });
    setImages(temp);
  }

  return (
    <section className="col-10 m-auto px-md-4">
      <div className="d-flex justify-content-center flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        {!id ? (
          <h1 className="display-2">New Product</h1>
        ) : (
          <h1 className="display-2">Edit Product</h1>
        )}
      </div>
      <div className="row">
        <div className="col-12">
          <form onSubmit={handleProduct} id="product-form">
            <div className="mb-3">
              <label htmlFor="product-name">
                Name <span className="text-danger fw-bold">*</span>
              </label>
              <input
                onChange={handleOnChange}
                value={formProduct.name}
                name="name"
                type="text"
                className="form-control"
                id="product-name"
                placeholder="Enter product name"
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="product-type">
                Category <span className="text-danger fw-bold">*</span>
              </label>
              <select
                onChange={handleOnChange}
                value={formProduct.categoryId}
                name="categoryId"
                id="product-type"
                className="form-select"
                required
              >
                <option>--Select Category--</option>;
                {categories.map((el) => {
                  return (
                    <option value={el.id} key={el.id}>
                      {el.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="product-price">
                Price <span className="text-danger fw-bold">*</span>
              </label>
              <input
                onChange={handleOnChange}
                value={formProduct.price}
                name="price"
                type="number"
                className="form-control"
                id="product-price"
                placeholder="Enter product price"
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="product-description">
                Description <span className="text-danger fw-bold">*</span>
              </label>
              <input
                onChange={handleOnChange}
                value={formProduct.description}
                name="description"
                type="text"
                className="form-control"
                id="product-description"
                placeholder="Enter product description"
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="product-image">
                Main Image <span className="text-danger fw-bold">*</span>
              </label>
              <input
                onChange={handleOnChange}
                value={formProduct.mainImg}
                name="mainImg"
                type="text"
                className="form-control"
                id="product-image"
                placeholder="Enter main image url"
                autoComplete="off"
                required
              />
            </div>
            {!id ? (
              <div className="mb-3 row">
                <div className="col-6">
                  <label htmlFor="product-image">
                    Image1 <span className="text-danger fw-bold">*</span>
                  </label>
                  <input
                    onChange={handleOnChangeImages}
                    name="image1"
                    type="text"
                    className="form-control"
                    id="product-image"
                    placeholder="Enter main image url"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="product-image">
                    Image2 <span className="text-danger fw-bold">*</span>
                  </label>
                  <input
                    onChange={handleOnChangeImages}
                    name="image2"
                    type="text"
                    className="form-control"
                    id="product-image"
                    placeholder="Enter main image url"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="product-image">
                    Image3 <span className="text-danger fw-bold">*</span>
                  </label>
                  <input
                    onChange={handleOnChangeImages}
                    name="image3"
                    type="text"
                    className="form-control"
                    id="product-image"
                    placeholder="Enter main image url"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="product-image">
                    Image4 <span className="text-danger fw-bold">*</span>
                  </label>
                  <input
                    onChange={handleOnChangeImages}
                    name="image4"
                    type="text"
                    className="form-control"
                    id="product-image"
                    placeholder="Enter main image url"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
            ) : (
              <></>
            )}

            <div className="row mt-5 mb-3">
              <div className="col-6">
                <button
                  className="btn btn-lg btn-smtg2 w-100 p-2"
                  id="cancel-add-category"
                  onClick={() => navigate("/")}
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
