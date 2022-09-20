function Description({ name, itemized }) {
  return (
    <div className="description-wrapper">
      <h4><a href={`mailto:someone@yoursite.com?subject=BOSS Marketplace ${name}`}>{name}</a></h4>
      {itemized.map((item, idx) => {
        return (
          <div className="description" key={idx}>
            <p className="item-title">
              Items: <span> {item.item}</span>
            </p>
            <p>
              Price: <span>${item.price}</span>
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
