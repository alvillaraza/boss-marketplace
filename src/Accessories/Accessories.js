import accessoriesData from "./data";

function Accessories() {
  return (
    <div>
      Accessories
      {accessoriesData.map((accessories) => {
        console.log(accessories);
        return (
          <>
            <img src={accessories.image} alt={accessories.name} />
          </>
        );
      })}
    </div>
  );
}

export default Accessories;
