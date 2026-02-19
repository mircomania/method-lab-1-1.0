import styles from '../../styles/modules/sectionLp5.module.css';

import logoMonday from '../../assets/images/global/logo-monday-negro.webp';
import img2 from '../../assets/images/home/section5/img-section-5-2.webp';
import img3 from '../../assets/images/home/section5/img-section-5-3.webp';
import img4 from '../../assets/images/home/section5/img-section-5-4.webp';
import img5 from '../../assets/images/home/section5/img-section-5-5.webp';
import img6 from '../../assets/images/home/section5/img-section-5-6.webp';
import img7 from '../../assets/images/home/section5/img-section-5-7.webp';
import img8 from '../../assets/images/home/section5/img-section-5-1.webp';

import { ScrollReveal } from '../utils/ScrollReveal';

export const SectionLp5 = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionContenido}>
                <ScrollReveal mode="clone" from="right" distance={0} duration={0.3} threshold={0.3} delay={0.6}>
                    <div className={`${styles.dobleWrap} ${styles.cont1}`}>
                        <img src={logoMonday} alt="Monday.com" />
                    </div>
                </ScrollReveal>

                <ScrollReveal mode="wrap" from="right" distance={0} duration={0.3} threshold={0.3} delay={0.4}>
                    <div className={`${styles.singleWrap} ${styles.cont2}`}>
                        <img src={img8} alt="Tablas de datos ordenándose" />
                    </div>
                </ScrollReveal>

                <ScrollReveal mode="clone" from="right" distance={0} duration={0.3} threshold={0.3} delay={0.2}>
                    <div className={`${styles.singleWrap} ${styles.cont3}`}>
                        <img src={img2} alt="Dos manos chocando los cinco con las palmas" />
                    </div>
                </ScrollReveal>

                <ScrollReveal mode="clone" from="right" distance={0} duration={0.3} threshold={0.3} delay={0}>
                    <div className={`${styles.singleWrap} ${styles.cont4}`}>
                        <img src={img3} alt="Una pestaña de navegador muy optimizada" />
                    </div>
                </ScrollReveal>

                <ScrollReveal mode="clone" from="left" distance={0} duration={0.3} threshold={0.2} delay={0}>
                    <div className={`${styles.singleWrap} ${styles.cont5}`}>
                        <p className="light-text">
                            Como solución <br /> tecnológica:
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal mode="clone" from="left" distance={0} duration={0.3} threshold={0.2} delay={0.2}>
                    <div className={`${styles.singleWrap} ${styles.cont6}`}>
                        <p className="light-text">
                            Es para líderes <br /> y colaboradores.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal mode="clone" from="left" distance={0} duration={0.3} threshold={0.2} delay={0.4}>
                    <div className={`${styles.dobleWrap} ${styles.cont7}`}>
                        <img src={img4} alt="Panel de control de datos de tu empresa" />
                    </div>
                </ScrollReveal>

                <ScrollReveal mode="clone" from="left" distance={0} duration={0.3} threshold={0.2} delay={0.6}>
                    <div className={`${styles.singleWrap} ${styles.cont8}`}>
                        <p className="light-text">
                            Es <br /> extremadamente <br /> fácil de usar.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal mode="clone" from="right" distance={0} duration={0.3} threshold={0.2} delay={0.8}>
                    <div className={`${styles.singleWrap} ${styles.cont9}`}>
                        <p className="light-text">
                            Nuestros clientes <br /> no invierten tiempo <br /> en desarrollo.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal mode="clone" from="right" distance={0} duration={0.3} threshold={0.1} delay={0.6}>
                    <div className={`${styles.singleWrap} ${styles.cont10}`}>
                        <img src={img5} alt="Lupa buscando los procesos mejorar tu empresa" />
                    </div>
                </ScrollReveal>

                <ScrollReveal mode="clone" from="right" distance={0} duration={0.3} threshold={0.1} delay={0.4}>
                    <div className={`${styles.singleWrap} ${styles.cont11}`}>
                        <p className="light-text">
                            Nosotros lo <br /> hacemos todo, <br /> desde cero <br /> y a la medida.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal mode="clone" from="right" distance={0} duration={0.3} threshold={0.1} delay={0.2}>
                    <div className={`${styles.singleWrap} ${styles.cont12}`}>
                        <img src={img6} alt="Todo en desarrollo de tu empresa en una sola mano" />
                    </div>
                </ScrollReveal>

                <ScrollReveal mode="clone" from="right" distance={0} duration={0.3} threshold={0.1} delay={0}>
                    <div className={`${styles.singleWrap} ${styles.cont13}`}>
                        <img src={img7} alt="Certificado de Monday.com" />
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};
