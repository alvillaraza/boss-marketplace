function Description({clothingName, itemized}) {
    return (
        <div className="description">
            {itemized.map((item, idx) => {
                return (
                    <div key={idx}>
                        {clothingName}
                        <p>Items: {item.item}</p>
                        <p>Price per item or set: {item.price}</p>
                        <p># available: {item.count}</p>
                    </div>
               )
           })}
        </div>
    )
}
export default Description;