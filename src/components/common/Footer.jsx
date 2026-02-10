import { useState } from 'react';

import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import logo from '../../assets/images/logo-figuras-black.png';

import { navLinks } from '../utils/NavBarMenu';

export const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState(navLinks[0].id);

    const handleLinkClick = (e, item) => {
        e.preventDefault();
        setActiveLink(item.id);

        // ———————— “Inicio” ————————
        if (item.to === '/') {
            if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                navigate('/');
            }
            return;
        }

        // ————— Anclas dentro de landing —————
        if (item.to.startsWith('#')) {
            if (location.pathname === '/') {
                const targetEl = document.querySelector(item.to);
                if (targetEl) {
                    window.scrollTo({
                        top: targetEl.offsetTop,
                        behavior: 'smooth',
                    });
                }
            } else {
                navigate(`/${item.to}`);
            }
            return;
        }

        // ————— Rutas completas —————
        navigate(item.to);
    };

    const handleLogoClick = (e) => {
        e.preventDefault();
        setActiveLink(navLinks[0].id);
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    return (
        <footer className="footer">
            <div className="footer-contenido">
                {/* REDES */}
                <div className="redes-footer light-text">
                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="linkedin"
                        data-link="footer-linkedin-link"
                    >
                        LINKEDIN
                    </a>

                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="instagram"
                        data-link="footer-instagram-link"
                    >
                        INSTAGRAM
                    </a>

                    <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="tiktok" data-link="footer-tiktok-link">
                        TIK TOK
                    </a>
                </div>

                <div className="logo-links-footer">
                    {/* LOGO  */}
                    <div className="logo-footer">
                        <a to="/" aria-label="Ir a la página de inicio" data-link="footer-logo-btn" onClick={handleLogoClick}>
                            <img src={logo} alt="Logotipo de MethodLab en el pie de página" />
                        </a>
                    </div>

                    {/* LINKS  */}
                    <div className="links-footer">
                        <ul className="menu-footer light-text">
                            {navLinks.map((item) => (
                                <li key={item.id}>
                                    {item.to.startsWith('#') || item.to === '/' ? (
                                        <a
                                            href={item.to}
                                            onClick={(e) => handleLinkClick(e, item)}
                                            className={activeLink === item.id ? 'active' : ''}
                                            title={item.title}
                                            data-link={item.dataLink}
                                        >
                                            {item.label2}
                                        </a>
                                    ) : (
                                        <NavLink
                                            to={item.to}
                                            title={item.title}
                                            className={({ isActive }) => (isActive || activeLink === item.id ? 'active' : '')}
                                            onClick={() => setActiveLink(item.id)}
                                            data-link={item.dataLink}
                                        >
                                            {item.label2}
                                        </NavLink>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="utils-footer light-text">
                <p>All right reserved.</p>

                <NavLink to="/politica-privacidad" title="Ver la política de privacidad" data-link="footer-politica-link">
                    Politica de Privacidad
                </NavLink>

                <NavLink to="/politica-privacidad" title="Ver las preguntas preguntas frecuentes" data-link="footer-faq-link">
                    FAQ
                </NavLink>
            </div>
        </footer>
    );
};
