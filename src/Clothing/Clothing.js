import clothingData from './data.js';
import Description from '../Description.js';

function Clothing({ handleAdd, handleRemove }) {
    // setCurrentCategory useState('welcome page')
    //if a certain category is clicked set that as the current category

    return (
        <div className="category-wrapper">
            {/* Clothing */}
            {clothingData.map((clothing, idx) => {
                return (
                    <div className="photo" key={idx}>
                        <img src={clothing.image} alt={clothing.name} />
                        <Description
                            name={clothing.name}
                            itemized={clothing.available}
                            handleAdd={handleAdd}
                            handleRemove={handleRemove}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default Clothing;
