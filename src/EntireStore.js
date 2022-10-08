
import allData from "./allData";
import Description from "./Description";

const EntireStore = ({category}) => {

  return (
    <section>
      Entire Store
     
      <div className="category-wrapper">
        {allData.map((item, idx) => {
          if (item.category === category) {
            return (
              <div className="photo" key={idx}>
                <img src={item.image} alt={item.name} />
                <Description
                  name={item.name}
                  itemized={item.available}
                />
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default EntireStore;
