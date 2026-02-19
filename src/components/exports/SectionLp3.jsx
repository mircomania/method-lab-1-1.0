import styles from '../../styles/modules/sectionLp3.module.css';
import logo from '../../assets/images/home/section3/logo-monday-blanco.webp';

import { ScrollReveal } from '../utils/ScrollReveal';

export const SectionLp3 = () => {
    return (
        <section className={styles.sectionContainer}>
            <ScrollReveal mode="clone" from="bottom" distance={30} duration={0.3} threshold={0.6}>
                <header className={styles.sectionTitulo}>
                    <h2 className="light-text">Servicios.</h2>
                </header>
            </ScrollReveal>

            <div className={styles.sectionContenido}>
                <ScrollReveal mode="clone" from="bottom" distance={30} duration={0.3} threshold={0.5}>
                    <h3 className="bold-text">
                        Realizamos un <span className={styles.palabra1}>diagnóstico</span> de tu <br />
                        empresa, <span className={styles.palabra2}>implementamos</span> flujos y <br />
                        tableros en <img src={logo} alt="monday.com" className={styles.inlineLogo} loading="lazy" decoding="async" /> y <br />
                        acompañamos a tu equipo con <br />
                        <span className={styles.palabra3}>capacitación</span> continua.
                    </h3>
                </ScrollReveal>
            </div>
        </section>
    );
};
