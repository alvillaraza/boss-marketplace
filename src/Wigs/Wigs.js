import wigsData from "./data";

function Wigs() {
  return (
    // todo: add marie antoinette wig
    <div>
      wigs
      {wigsData.map((wigs) => {
        console.log(wigs);
        return (
          <>
            <img src={wigs.image} alt={wigs.name} />
          </>
        );
      })}
    </div>
  );
}

export default Wigs;
