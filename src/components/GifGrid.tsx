import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGif";

export const GifGrid = (prop: any) => {
  // const [gifs, setGifs] = useState([]);

  // useEffect(() => {
  //   const resultados = await getGifs(prop.title);

  // }, []);

  return (
    <div>
      <h3>
        {prop.title}
        {/* {gifs.map((gif: any) => {
          return (
            <div key={gif.id}>
              <img src={gif.images.fixed_height.url} alt="" />
            </div>
          );
        })} */}
      </h3>
      <p>hola mundo</p>
    </div>
  );
};
