function Description({ name, itemized }) {
    return (
        <div className="description-wrapper">
            <h4 className="item-title">
                <a
                    href={`mailto:alexis.borja@gmail.com?subject=BOSS Marketplace ${name}`}
                >
                    {name} <i className="fas fa-envelope"></i>
                </a>
            </h4>
            {itemized.map((item, idx) => {
                return (
                    <div className="description" key={idx}>
                        <p className="items">
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
