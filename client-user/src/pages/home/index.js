import { useEffect, useState } from "react";
import Banner from "../../components/banner";
import Preloader from "../../components/preloader";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const imageUrl = [
    "https://images.somethinc.com/uploads/thumbs/Website-Main-Banner_1240x400_1240.jpg",
    "https://images.somethinc.com/uploads/thumbs/Web_Homepage-Banner-Desktop_NPD-Brow-Pomade_1240.jpg",
    "https://images.somethinc.com/uploads/thumbs/1240x400_%281%29_1240.jpg",
  ];

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? <Preloader /> : <></>}
      {imageUrl.map((el, i) => {
        return <Banner image={el} key={i + 1} />;
      })}
    </div>
  );
}
