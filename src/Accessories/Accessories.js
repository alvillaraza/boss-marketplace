import accessoriesData from './data';
import Description from '../Description';

function Accessories({ handleAdd }) {
    return (
        <div className="category-wrapper">
            {/* Accessories */}
            {accessoriesData.map((accessories, idx) => {
                return (
                    <div className="photo" key={idx}>
                        <img src={accessories.image} alt={accessories.name} />
                        <Description
                            name={accessories.name}
                            itemized={accessories.available}
                            handleAdd={handleAdd}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default Accessories;
