function Description({clothingName, itemized}) {
    return (
        <div className="description-wrapper">
            <h4>{clothingName}</h4>
            {itemized.map((item, idx) => {
                return (
                    <div className="description" key={idx}>
                        <p className='item-title'>Items: {item.item}</p>
                        <p>Price per item or set: ${item.price}</p>
                        <p># available: {item.count}</p>
                    </div>
               )
           })}
        </div>
    )
}
export default Description;