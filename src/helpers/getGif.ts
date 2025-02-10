export const getGifs = async (category: any) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=ial1SonTjAJuJYEAt9vUM38SBVG1O8AV&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img: any) => ({
    id: img.id,
    title: img.title,
    url: img.images.fixed_height_small.url,
  }));
  return gifs;
};
