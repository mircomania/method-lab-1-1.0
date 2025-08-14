import { useRef } from 'react';
import styles from '../../styles/modules/sectionLp3.module.css';
import { Linea } from '../utils/Linea';

export const SectionLp3 = () => {
    const sectionRef = useRef(null);

    return (
        <section ref={sectionRef} className={styles.sectionContainer}>
            <Linea sectionRef={sectionRef} linea="hor" maxWidth={80} top={{ default: 20 }} left={{ default: 0 }} />
            <Linea sectionRef={sectionRef} linea="ver" maxWidth={80} bottom={{ default: 0 }} right={{ default: 20 }} />
            <Linea sectionRef={sectionRef} linea="ver" maxWidth={60} bottom={{ default: 0 }} right={{ default: 30 }} />

            <header className={styles.sectionTitulo}>
                <h2 className="light-text">Nuestros Servicios.</h2>
            </header>
        </section>
    );
};
