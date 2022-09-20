function Description({ name, itemized }) {
  return (
    <div className="description-wrapper">
      <h4>{name}</h4>
      {itemized.map((item, idx) => {
        return (
          <div className="description" key={idx}>
            <p>
              Items: <span> {item.item}</span>
            </p>
            <p>
              Price per item or set: <span>${item.price}</span>
            </p>
            <p>
              # available: <span>{item.count}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
export default Description;
