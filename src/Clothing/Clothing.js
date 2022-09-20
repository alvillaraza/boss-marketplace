import clothingData from "./data.js";
import Description from "./Description.js";

function Clothing() {
  return (
    <div className="category-wrapper">
      Clothing
      {clothingData.map((clothing) => {
        return (
          <div className="photo">
            <img src={clothing.image} alt={clothing.name} />
            <Description
              clothingName={clothing.name}
              itemized={clothing.available}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Clothing;
