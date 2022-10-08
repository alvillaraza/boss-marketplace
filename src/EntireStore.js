import React, { useState } from 'react';
import allData from './allData';

const EntireStore = () => {
    const [category, setCategory] = useState('all')
    console.log('category', category)
    console.log(allData)
    function handleChange(e) {
         setCategory(e.target.value)
      console.log('e', e.target.value)
      }

      function handleSubmit(e) {
        e.preventDefault();
      }
    return (
        <section>Entire Store
             <form onSubmit={handleSubmit}>
          <select
            className="dropdown"
            onChange={handleChange}
            // value={props.currentCategory}
            aria-label="dropdown"
          >
            <option value="" placeholder="see all products">
              See all Products
            </option>
            <option value="clothing">Clothing</option>
            <option value="hats">Hats</option>
            <option value="wigs">Wigs</option>
            <option value="accessories">Accessories</option>
          </select>
        </form>
            <div>
                
        </div>
        </section>
    )
}

export default EntireStore;