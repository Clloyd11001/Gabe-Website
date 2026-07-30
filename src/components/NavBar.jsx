import { useEffect, useState } from "react";
import { navLinks } from "../constants/index";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">
                <a className="logo" href="#hero" style={{ display: "flex", alignItems: "center" }}>
                    <img alt="Main logo" style={{ height: "4rem", width: "auto" }} src={`${import.meta.env.BASE_URL}images/mainLogo.png`} />
                </a>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span
                                        style={{
                                            WebkitTextStroke: "1px black",
                                            fontSize: "4rem",
                                            color: "white",
                                            fontFamily: "-apple-system",
                                        }}
                                    >
                                        {name}
                                    </span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name}>
                                <a style={{ fontFamily: '-apple-system' }} href={link} onClick={() => setIsMenuOpen(false)}>
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <a href="#contact" className="contact-btn group">
                    <div className="inner" style={{ display: "flex", background: "transparent", color: "white", fontSize: "1.5rem" }}>
                        <div style={{ fontFamily: '-apple-system' }}>
                            <div>Book Me</div>
                        </div>
                    </div>
                </a>
            </div>
        </header>
    );
};

export default NavBar;