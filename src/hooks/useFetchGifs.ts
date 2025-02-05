import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGif";

export const useFetchGifs = (category: any) => {
  const [gifs, setGifs] = useState([]);

  const getImages = async () => {
    const res = await getGifs(category);
    setGifs(res);
  };
  useEffect(() => {
    getImages();
  }, []);

  console.log(gifs, "gifs");
  return {
    images: gifs,
    isLoading: true,
  };
};
