import wigsData from './data';
import Description from '../Description';

function Wigs() {
    return (
        // todo: add marie antoinette wig
        <div className="category-wrapper">
            {/* wigs */}
            {wigsData.map((wigs, idx) => {
                return (
                    <div className="photo" key={idx}>
                        <img src={wigs.image} alt={wigs.name} />
                        <Description
                            name={wigs.name}
                            itemized={wigs.available}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default Wigs;
