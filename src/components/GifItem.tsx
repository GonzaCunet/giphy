export const GifItem = ({ title, url }: any) => {
  return (
    <div className="card">
      <img src={url} alt="" />
      <p>{title}</p>
    </div>
  );
};
