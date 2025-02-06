import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGif";

export const useFetchGifs = (category: any) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const res = await getGifs(category);
    setGifs(res);
    setIsLoading(false);
  };
  useEffect(() => {
    getImages();
  }, []);

  return {
    images: gifs,
    isLoading,
  };
};
