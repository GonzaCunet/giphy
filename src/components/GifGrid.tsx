import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGif";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = (props: any) => {
  const { images, isLoading } = useFetchGifs(props.title);
  console.log(images);
  // const [gifs, setGifs] = useState([]);

  // const getImages = async () => {
  //   const res = await getGifs(prop.title);
  //   setGifs(res);
  // };
  // useEffect(() => {
  //   getImages();
  // }, []);

  return (
    <>
      <div className="div-titulo">
        <h3>{props.title}</h3>
      </div>
      <div className="card-grid">
        {images.map((img: any) => {
          return <GifItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
