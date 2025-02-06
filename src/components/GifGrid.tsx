// import { useState } from "react";
// import { getGifs } from "../helpers/getGif";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = (props: any) => {
  const { images, isLoading }: any = useFetchGifs(props.title);

  return (
    <>
      {isLoading && <h2>Cargando...</h2>}
      <div className="div-titulo">
        <h3>{props.title}</h3>
        <button onClick={() => props.onDelete(props.title)}>borrar</button>
      </div>
      <div className="card-grid">
        {images?.map((img: any) => {
          return <GifItem key={img.id} title={img.title} url={img.url} />;
        })}
      </div>
    </>
  );
};
