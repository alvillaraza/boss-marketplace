function Description({ name, itemized }) {
  return (
    <div className="description-wrapper">
      <h4>{name}</h4>
      {itemized.map((item, idx) => {
        return (
          <div className="description" key={idx}>
            <p className="item-title">Items: {item.item}</p>
            <p><span>Price per item or set:</span> ${item.price}</p>
            <p><span># available:</span> {item.count}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Description;
