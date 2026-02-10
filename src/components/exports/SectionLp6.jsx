import styles from '../../styles/modules/sectionLp6.module.css';

import imgSection from '../../assets/images/img-section-6-1.png';

import { ScrollReveal } from '../utils/ScrollReveal';
import { useMediaQuery } from '../../hooks/UseMediaQuery';

export const SectionLp6 = () => {
    const isMobile = useMediaQuery('(max-width: 1199px)');

    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionContenido}>
                <ScrollReveal mode="clone" from={isMobile ? 'bottom' : 'right'} distance={30} duration={0.3} threshold={0.6}>
                    <div className={styles.cont1}>
                        <header className={styles.sectionTitulo}>
                            <h2 className="bold-text">
                                Method Lab<span className="registered">®</span> Founder
                            </h2>
                        </header>

                        <p className="light-text">
                            Soy <strong>David Cano</strong>, fundador de Method Lab<span className="registered">®</span>.
                        </p>

                        <p className="light-text">
                            Desde el 2019 ayudo a líderes y equipos a trabajar de forma más ordenada y productiva, dejando atrás el caos operativo
                            para enfocarse en lo que realmente importa.
                        </p>

                        <p className="light-text">
                            En Method Lab<span className="registered">®</span> diseñamos procesos de trabajo hechos a la medida, que combinan
                            estructura, claridad y tecnología para impulsar el liderazgo y la productividad.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal mode="clone" from={isMobile ? 'bottom' : 'left'} distance={30} duration={0.3} threshold={0.1}>
                    <div className={styles.cont2}>
                        <img src={imgSection} alt="" />

                        <div className={styles.citaContainer}>
                            <p className="light-text">
                                &quot;El crecimiento de las empresas <br /> puede suceder sin la necesidad de <br /> vivir bajo el caos&quot;
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};
