import { Link } from "react-router-dom";

function Header({ setCategory }) {
  const categories = ["clothing", "hats", "wigs", "accessories"];
  function handleChange(cat) {
    setCategory(cat);
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
      </nav>
    </section>
  );
}

export default Header;
