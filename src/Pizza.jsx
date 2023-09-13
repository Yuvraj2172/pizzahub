const Pizza = ( { key, name, pic, price }) => {
  return (
    <article key={key}>
      <h2>{name}</h2>
      <img src={pic} alt="alt" />
      <p>{price}</p>
    </article>
  );
};

export default Pizza;
