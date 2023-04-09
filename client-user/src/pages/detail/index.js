import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Preloader from "../../components/preloader";
import toRupiah from "../../helpers/toRupiah";
import {
  fetchOneProduct,
  fetchQuote,
} from "../../store/actions/actionProducts";

export default function DetailProductPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [quote, setQuote] = useState();
  const [images, setImages] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchOneProduct(id)).then((result) => {
      setProduct(result);
      setImages(result.Images);
      setLoading(false);
    });
    dispatch(fetchQuote()).then((result) => {
      setQuote(result);
    });
  }, [dispatch]);

  return (
    <section className="section" id="product">
      {loading ? <Preloader /> : <></>}
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="left-images">
              <div className="row">
                {images?.map((el) => {
                  return (
                    <div key={el.id} className="col-6">
                      <img src={el.imgUrl} alt="detail" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="right-content">
              <h4>{product?.name}</h4>
              <span className="price">{toRupiah(product?.price)}</span>
              <span>{product?.description}</span>
              <div className="quote">
                <i className="fa fa-quote-left"></i>
                <p>{quote?.quote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
