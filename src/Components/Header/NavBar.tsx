import "./NavBar.css";

function NavBar() {
  return (
    <header className="navbar-wrap">
      <nav className="navbar" aria-label="Navegacao principal">
        <a className="brand" href="#home">
          Love Note
        </a>

        <div className="nav-links">
          <a href="#home">Inicio</a>
          <a href="#moments">Momentos</a>
          <a href="#mensagem">Mensagem</a>
        </div>

        <a className="nav-cta" href="#mensagem">
          Te amo
        </a>
      </nav>
    </header>
  );
}

export default NavBar;
