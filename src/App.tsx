import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

interface Image {
  id: number;
  download_url: string;
  author: string;
}
const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("https://picsum.photos/v2/list?page=1&limit=15");
        setImages(res.data);
      } catch (error) {
        console.error("Could not fetch images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);


  return (
    <div>
      <h1>15 Random Images</h1>
      {loading ? (
        <p className="loader"></p>
      ) : (
        <div className="image-container">
          {images.map((image) => (
            <img key={image.id} src={image.download_url} alt={`Random by ${image.author}`} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
