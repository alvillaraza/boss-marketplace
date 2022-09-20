import hatsData from './data'
import Description from '../Hats/Description';

function Hats() {
  return (
    <div className='category-wrapper'>
      Hats
      {hatsData.map((hats) => {
        return (
          <div className="photo">
            <img src={hats.image} alt={hats.name} />
            <Description
              hatName={hats.name}
              itemized={hats.available}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Hats;