import { Link } from "react-router-dom";

function Header({setCategory}) {
    function handleChange(e) {
      setCategory(e.target.value);
      console.log("e", e.target.value);
    }

    function handleSubmit(e) {
      e.preventDefault();
    }
  return (
    <section className="header-wrapper">
      <Link to="/">BOSS Marketplace</Link>
      <nav>
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
        {/* <Link to="/clothing">
          <h2>Clothing</h2>
        </Link>
        <Link to="/accessories">
          <h2>Accessories</h2>
        </Link>

        <Link to="/hats">
          <h2>Hats</h2>
        </Link>

        <Link to="/wigs">
          <h2>Wigs</h2>
        </Link> */}
      </nav>
    </section>
  );
}

export default Header;
