import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Todo</Link>
      <Link to="/about">Om</Link>
    </nav>
  );
};

export default Navbar;
