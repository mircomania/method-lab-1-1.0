import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { SectionLp1 } from '../exports/SectionLp1';
import { SectionLp2 } from '../exports/SectionLp2';
import { SectionLp3 } from '../exports/SectionLp3';
import { SectionLp4 } from '../exports/SectionLp4';
import { SectionLp5 } from '../exports/SectionLp5';
import { SectionLp6 } from '../exports/SectionLp6';
import { SectionLp7 } from '../exports/SectionLp7';
import { SectionLp8 } from '../exports/SectionLp8';

const LandingPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                const offsetTop = element.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth',
                });
            }
        }
    }, [location]);

    return (
        <main>
            <SectionLp1 />

            <SectionLp2 />

            <section id="servicios">
                <SectionLp3 />
            </section>

            <section id="metodologia">
                <SectionLp4 />
            </section>

            <section id="monday">
                <SectionLp5 />
            </section>

            <section id="nosotros">
                <SectionLp6 />
            </section>

            <SectionLp7 />

            <section id="contacto">
                <SectionLp8 />
            </section>
        </main>
    );
};

export default LandingPage;
