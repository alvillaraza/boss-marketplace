import wigsData from "./data";
import Description from "../Description";

function Wigs({ handleAdd }) {
  return (
    // todo: add marie antoinette wig
    <div className="category-wrapper">
      {/* wigs */}
      {wigsData.map((wigs) => {
        return (
          <div className="photo">
            <img src={wigs.image} alt={wigs.name} />
            <Description
              name={wigs.name}
              itemized={wigs.available}
              handleAdd={handleAdd}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Wigs;
