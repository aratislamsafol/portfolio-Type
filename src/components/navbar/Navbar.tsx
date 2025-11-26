import style from "./navbar.module.scss";
import { useState, useEffect } from "react";
import img1 from "../../assets/img/about-me.jpg";
import { Spin as Hamburger } from "hamburger-react";
import { NavHashLink } from "react-router-hash-link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const menuItem = [
    { id: "1", label: "Home", to: "#home" },
    { id: "2", label: "ABOUT me", to: "#about" },
    { id: "3", label: "services", to: "#services" },
    { id: "4", label: "portfolio", to: "#portfolio" },
    { id: "5", label: "blogs", to: "#blog" },
    { id: "6", label: "contact me", to: "#contact" },
  ];

  const socialIcon = [
    { label: "fa-facebook-f", to: "" },
    { label: "fa-twitter", to: "" },
    { label: "fa-linkedin-in", to: "" },
    { label: "fa-instagram", to: "" },
    { label: "fa-pinterest", to: "" },
  ];

  const collapseNavbar = () => setIsOpen(!isOpen);

  // Detect scrolling to toggle navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setIsScrolled(true);
      else setIsScrolled(false);

      // Active section logic
      menuItem.forEach((item) => {
        const section = document.querySelector(item.to) as HTMLElement | null;
        if (section) {
          const top = section.offsetTop - 150;
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActiveSection(item.to);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${style.wrapper} ${isScrolled ? style.navScrolled : style.navTransparent}`}>
      <div className={style.navbar_flex}>
        <div className={style.logo}>
          <h4 className={`${isScrolled ? "" : style.navScrolledTitleColor}`}>Christopher</h4>
        </div>
        <div className={style.nav_bars}>
          <Hamburger size={25} direction="right" onToggle={collapseNavbar} />
        </div>
      </div>

      {/* Off Canvas */}
      <div className={`${style.off_canvas} ${isOpen ? style.off_canvas_open : ""}`}>
        <div className={style.offCanvasTop}>
          <div className={style.circle}></div>
          <div className={style.offCanvasAvatar}>
            <img src={img1} alt="profile Avatar Image" />
          </div>
        </div>

        <h4 style={{ textAlign: "center", marginTop: "10px", fontSize: "20px", fontWeight: 700 }}>
          Christopher Miller
        </h4>

        <div className={style.menu}>
          <ul>
            {menuItem.map((item) => (
              <li key={item.id}>
                <NavHashLink
                  to={item.to}
                  smooth
                  className={activeSection === item.to ? style.active : ""}
                  onClick={() => setActiveSection(item.to)}
                >
                  <p>{item.label}</p>
                </NavHashLink>
              </li>
            ))}
          </ul>
        </div>

        <div className={style.social_icon}>
          {socialIcon.map((icon, index) => (
            <a key={index} href="#">
              <i className={`fa-brands ${icon.label}`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
