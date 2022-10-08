function Description({ name, itemized, handleAdd, handleRemove }) {
    return (
        <div className="description-wrapper">
            <h4 className="item-title">
                <a
                    href={`mailto:someone@yoursite.com?subject=BOSS Marketplace ${name}`}
                >
                    {name} <i className="fas fa-envelope"></i>
                </a>
            </h4>
            {itemized.map((item, idx) => {
                return (
                    <div className="description" key={idx}>
                        <div className="items">
                            <div
                                onClick={() => {
                                    handleAdd(item);
                                }}
                            >
                                <i
                                    className={`fas fa-plus  ${
                                        item.count <= 0 ? 'hide' : ''
                                    }`}
                                ></i>
                            </div>

                            <span> {item.item}</span>
                        </div>
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
