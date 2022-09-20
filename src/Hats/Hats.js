// import hatsData from './data'

// function Hats() {
//   return (
//     <div className='category-wrapper'>
//       Hats
//       {hatsData.map((hats) => {
//         console.log(hats);
//         return (
//           <>
//             <img src={hats.image} alt={hats.name} />
//           </>
//         );
//       })}
//     </div>
//   );
// }

// export default Hats;

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