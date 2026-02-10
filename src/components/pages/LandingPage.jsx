import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { TitleSEO } from '../utils/TitleSEO';

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
            <TitleSEO
                title="Method Lab | Crece sin caos"
                description="Consultoría que organiza y optimiza procesos con monday.com para que tu empresa crezca sin caos."
                canonical="https://methodlab.mx/"
            />

            <SectionLp1 />

            <SectionLp2 />

            <section id="servicios" className="stack">
                <SectionLp3 />
            </section>

            <section id="metodologia" className="stack">
                <SectionLp4 />
            </section>

            <section id="monday" className="stack">
                <SectionLp5 />
            </section>

            <section id="nosotros" className="stack">
                <SectionLp6 />
            </section>

            <section className="stack">
                <SectionLp7 />

                <section id="contacto">
                    <SectionLp8 />
                </section>
            </section>
        </main>
    );
};

export default LandingPage;
