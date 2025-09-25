import styles from '../../styles/modules/sectionLp2.module.css';

import { BotonNav } from '../utils/BotonNav';

export const SectionLp2 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="light-text">
                    En{' '}
                    <strong>
                        Method Lab<span className="registered">®</span>
                    </strong>
                    ayudamos a líderes y equipos a trabajar con claridad. Diagnosticamos tu operación, diseñamos procesos eficientes y los
                    implementamos en herramientas digitales fáciles de usar. Así, tu negocio gana orden, productividad y control real.
                </h2>
            </header>

            <div>
                <BotonNav dataCta="home-btn-2">DISEÑEMOS TU MÉTODO.</BotonNav>
            </div>
        </section>
    );
};
