import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Blog Manager
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/new">Create Article</Link>
      </nav>
    </header>
  );
}

export default Header;