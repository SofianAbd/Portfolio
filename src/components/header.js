// Header.js
import React, { useEffect, useState, useCallback } from 'react';
import './header.scss';  // We'll create this CSS file in the next step
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    // Function to handle scroll
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        const offset = window.scrollY;
        if (offset > 200) {  // Adjust offset value to your preference
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);
    

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <nav>
                <ul>
                    <li><a href="#main"><FontAwesomeIcon icon={faHome} /> Accueil</a></li>
                    <li><a href="#about"><FontAwesomeIcon icon={faUser} /> À propos</a></li>
                    <li><a href="#projects"><FontAwesomeIcon icon={faProjectDiagram} /> Projets</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
