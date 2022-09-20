import clothingData from "./data.js";
import Description from "../Description.js";

function Clothing() {
  // setCurrentCategory useState('welcome page')
  //if a certain category is clicked set that as the current category


  return (
    <div className="category-wrapper">
      {/* Clothing */}
      {clothingData.map((clothing) => {
        return (
          <div className="photo">
            <img src={clothing.image} alt={clothing.name} />
            <Description
              name={clothing.name}
              itemized={clothing.available}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Clothing;
