import hatsData from './data'

function Hats() {
  return (
    <div className='category-wrapper'>
      Hats
      {hatsData.map((hats) => {
        console.log(hats);
        return (
          <>
            <img src={hats.image} alt={hats.name} />
          </>
        );
      })}
    </div>
  );
}

export default Hats;
