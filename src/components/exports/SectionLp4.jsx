import { useRef } from 'react';
import styles from '../../styles/modules/sectionLp4.module.css';

export const SectionLp4 = () => {
    const sectionRef = useRef(null);

    return (
        <section ref={sectionRef} className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="light-text">Metodología</h2>
            </header>
        </section>
    );
};
