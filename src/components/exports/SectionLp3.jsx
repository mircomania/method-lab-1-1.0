import styles from '../../styles/modules/sectionLp3.module.css';
import logoMonday from '../../assets/images/logo-monday-blanco.png';

import { ScrollReveal } from '../utils/ScrollReveal';
import { useMediaQuery } from '../../hooks/UseMediaQuery';

export const SectionLp3 = () => {
    const isMobile = useMediaQuery('(max-width: 1199px)');

    return (
        <section className={styles.sectionContainer}>
            <ScrollReveal mode="clone" from="bottom" distance={0} duration={0.3} disabled={isMobile} threshold={0.2}>
                <header className={styles.sectionTitulo}>
                    <h2 className="light-text">Servicios.</h2>
                </header>
            </ScrollReveal>

            <div className={styles.sectionContenido}>
                <ScrollReveal mode="clone" from="bottom" distance={0} duration={0.3} disabled={isMobile} threshold={0.2}>
                    <h3 className="bold-text">
                        Realizamos un <span className={styles.palabra1}>diagnóstico</span> de tu <br />
                        empresa, <span className={styles.palabra2}>implementamos</span> flujos y <br />
                        tableros en <img src={logoMonday} alt="monday.com" className={styles.inlineLogo} loading="lazy" decoding="async" /> y <br />
                        acompañamos a tu equipo con <br />
                        <span className={styles.palabra3}>capacitación</span> continua.
                    </h3>
                </ScrollReveal>
            </div>
        </section>
    );
};
