import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import LogoNavbar from '../../assets/images/logo-figuras-black.png';

import { BurgerMenu } from './BurgerMenu';
import { navLinks } from '../utils/NavBarMenu';

export const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState(navLinks[0].id);
    const [isScrolled, setIsScrolled] = useState(false);

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
                        top: targetEl.offsetTop - 80,
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

    // Detectar scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} aria-label="Barra de navegación principal">
                {/* LOGO */}

                <div className="logo-container">
                    <a href="/" aria-label="Ir a la página principal" data-link="navbar-logo-btn" onClick={handleLogoClick}>
                        <img src={LogoNavbar} alt="Logotipo de Method Lab en la barra de navegación" className="logo-navbar" />
                    </a>
                </div>

                {/* LISTA  */}

                <ul className="menu-nav light-text">
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
                                    {item.label}
                                </a>
                            ) : (
                                <NavLink
                                    to={item.to}
                                    title={item.title}
                                    className={({ isActive }) => (isActive || activeLink === item.id ? 'active' : '')}
                                    onClick={() => setActiveLink(item.id)}
                                    data-link={item.dataLink}
                                >
                                    {item.label}
                                </NavLink>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* BURGERMENU */}

            <BurgerMenu />
        </header>
    );
};
