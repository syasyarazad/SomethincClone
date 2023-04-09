import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCategory } from "../../store/actions/actionCategories";

export default function TableRowCategories({ category, index }) {
  const dispatch = useDispatch();

  function handleDeleteCategory() {
    dispatch(deleteCategory(category.id));
  }

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td className="fw-bold">{category.name}</td>
      <td>{category.createdAt.split("T")[0]}</td>
      <td>{category.updatedAt.split("T")[0]}</td>
      <td>
        <Link
          className="ms-3"
          type="button"
          to={`/category-form/${category.id}`}
        >
          <span className="text-warning">
            <i className="bi bi-pencil-square"></i>
          </span>
        </Link>
        <Link className="ms-3" onClick={handleDeleteCategory}>
          <span className="text-danger">
            <i className="bi bi-trash"></i>
          </span>
        </Link>
      </td>
    </tr>
  );
}
