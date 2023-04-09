import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchOneProduct } from "../../store/actions/actionProducts";

export default function ImagesProductPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [images, setImages] = useState();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchOneProduct(id)).then((result) => {
      setImages(result.Images);
    });
  }, [dispatch, id]);

  return (
    <section className="vh-100" style={{ backgroundColor: "#ede6fd" }}>
      <div className="d-flex justify-content-center flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="display-2">Images</h1>
      </div>
      <div className="container h-100">
        <div className="row">
          {images?.map((el) => {
            return (
              <div key={el.id} className="col-md-6">
                <img src={el.imgUrl} className="img-thumbnail" alt={el.id} />
              </div>
            );
          })}
        </div>
        <div className="row mt-5 mb-3">
          <div className="col-12">
            <button
              className="btn btn-lg btn-smtg2 w-100 p-2"
              id="cancel-add-category"
              onClick={() => navigate("/")}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
