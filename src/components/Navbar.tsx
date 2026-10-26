import "./styles/Navbar.css";

const Navbar = () => (
  <header className="header">
    <a
      href="#landingDiv"
      className="navbar-title"
      aria-label="Home"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      HM
    </a>
    <a
      href="https://www.linkedin.com/in/harshmakhija24/"
      className="navbar-connect mono"
      target="_blank"
      rel="noreferrer"
    >
      linkedin.com/in/harshmakhija24
    </a>
    <nav>
      <ul>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#work">WORK</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
        <li>
          <a
            className="nav-resume"
            href={import.meta.env.BASE_URL + "Harsh_Makhija_CV.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            download="Harsh_Makhija_CV.pdf"
          >
            RESUME
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
