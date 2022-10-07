import hatsData from './data'
import Description from '../Description';

function Hats() {
  return (
    <div className='category-wrapper'>
      {/* Hats */}
      {hatsData.map((hats, idx) => {
        return (
          <div className="photo" key={idx}>
            <img src={hats.image} alt={hats.name} />
            <Description
              name={hats.name}
              itemized={hats.available}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Hats;