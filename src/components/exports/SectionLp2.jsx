import styles from '../../styles/modules/sectionLp2.module.css';

import { BotonNav } from '../utils/BotonNav';

export const SectionLp2 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="light-text">
                    En <strong>Method Lab®</strong>, sabemos que el orden libera. Ayudamos a equipos a salir del caos operativo para enfocarse en lo
                    que realmente importa. Diseñamos flujos claros, procesos eficientes y estructuras que sí se usan.
                </h2>
            </header>

            <div>
                <BotonNav to="/" ariaLabel="Ir a la página de inicio" title="Haz clic para ir a la página de inicio" dataLink="error-home-btn">
                    DISEÑEMOS TU MÉTODO.
                </BotonNav>
            </div>
        </section>
    );
};
