import accessoriesData from "./data";
import Description from "../Description";

function Accessories() {
  return (
    <div className="category-wrapper">
      {/* Accessories */}
      {accessoriesData.map((accessories) => {
        return (
          <div className="photo">
            <img src={accessories.image} alt={accessories.name} />
            <Description name={accessories.name} itemized={accessories.available} />
          </div>
        );
      })}
    </div>
  );
}

export default Accessories;
