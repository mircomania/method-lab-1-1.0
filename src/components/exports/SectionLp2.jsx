import styles from '../../styles/modules/sectionLp2.module.css';

import { BotonNav } from '../utils/BotonNav';
import { ScrollReveal } from '../utils/ScrollReveal';
import { useMediaQuery } from '../../hooks/UseMediaQuery';

export const SectionLp2 = () => {
    const isMobile = useMediaQuery('(max-width: 1199px)');

    return (
        <section className={styles.sectionContainer}>
            <ScrollReveal mode="clone" from="bottom" distance={0} duration={0.3} disabled={isMobile} threshold={0.2}>
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
            </ScrollReveal>

            <ScrollReveal mode="clone" from="bottom" distance={0} duration={0.3} disabled={isMobile} threshold={0.2}>
                <div>
                    <BotonNav dataCta="home-btn-2">DISEÑEMOS TU MÉTODO.</BotonNav>
                </div>
            </ScrollReveal>
        </section>
    );
};
