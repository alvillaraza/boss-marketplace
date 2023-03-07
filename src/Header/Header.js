import { Link } from "react-router-dom";

function Header({ setCategory }) {


  return (
    <section className="header-wrapper">
      <Link to="/about">BOSS Marketplace</Link>
     
    </section>
  );
}

export default Header;
