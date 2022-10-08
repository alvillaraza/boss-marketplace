import { Link } from "react-router-dom";

function Header({ setCategory }) {
  const categories = ["clothing", "hats", "wigs", "accessories"];
  function handleChange(cat) {
    setCategory(cat);
    console.log("e", cat);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="header-wrapper">
      <Link to="/about">BOSS Marketplace</Link>
      <nav>
        {categories.map((cat, idx) => {
          return (
            <Link to="/" key={idx} onClick={() => handleChange(cat)}>
              <h2>{cat}</h2>
            </Link>
          );
        })}
        {/* <form onSubmit={handleSubmit}>
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
          </select> */}
        {/* </form> */}
      </nav>
    </section>
  );
}

export default Header;
