import clothingData from "./data.js";

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

