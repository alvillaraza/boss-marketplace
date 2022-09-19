import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to='/'>BOSS Marketplace</Link>
      <Link to="/clothing">
        <h2>Clothing</h2>
      </Link>
      |
      <Link to="/accessories">
        <h2>Accessories</h2>
      </Link>
      |
      <Link to="/hats">
        <h2>Hats</h2>
      </Link>
      |
      <Link to="/wigs">
        <h2>Wigs</h2>
      </Link>
    </nav>
  );
}

export default Header;
