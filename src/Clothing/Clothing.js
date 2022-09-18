import clothingData from "./data.js";
import apocalypse_gold from "./assets/apocalypse_gold.jpeg";

function Clothing() {
  // console.log(clothingData)
  return (
    <div>
      Clothing
      {clothingData.map((clothing) => {
        console.log(clothing);
        return (
          <>
            <img src={clothing.image} alt={clothing.name} />
          </>
        );
      })}
    </div>
  );
}

export default Clothing;
