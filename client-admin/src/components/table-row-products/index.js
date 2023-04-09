import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import toRupiah from "../../helpers/toRupiah";
import {
  deleteProduct,
  fetchOneProduct,
} from "../../store/actions/actionProducts";

export default function TableRowProducts({ product, index }) {
  const dispatch = useDispatch();
  function handleDeleteProduct() {
    dispatch(deleteProduct(product.id));
  }

  function handleImages() {
    dispatch(fetchOneProduct(product.id));
  }

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td className="fw-bold">{product.name}</td>
      <td>{product.Category.name}</td>
      <td className="fw-bold">{toRupiah(product.price)}</td>
      <td>{product.User.email}</td>
      <td>
        <img src={product.mainImg} className="img-fluid" alt="Product" />
      </td>
      <td>
        <Link to={`/images/${product.id}`}>
          <button
            type="button"
            className="btn btn-smtg"
            onClick={handleImages}
          >
            Show Images
          </button>
        </Link>
      </td>
      <td>
        <Link to={`/product-form/${product.id}`} className="ms-3">
          <span className="text-warning">
            <i className="bi bi-pencil-square"></i>
          </span>
        </Link>
        <Link onClick={handleDeleteProduct} className="ms-3">
          <span className="text-danger">
            <i className="bi bi-trash"></i>
          </span>
        </Link>
      </td>
    </tr>
  );
}
