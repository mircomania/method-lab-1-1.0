import styles from '../../styles/modules/sectionLp1.module.css';

import img1 from '../../assets/images/home/section1/figura-1.webp';
import img2 from '../../assets/images/home/section1/figura-2.webp';
import img3 from '../../assets/images/home/section1/figura-3.webp';
import img4 from '../../assets/images/home/section1/figura-4.webp';
import img5 from '../../assets/images/home/section1/figura-5.webp';

import { BotonNav } from '../utils/BotonNav';
import { ScrollReveal } from '../utils/ScrollReveal';

export const SectionLp1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <ScrollReveal mode="clone" from="bottom" distance={0} duration={0.3} threshold={0.2}>
                <header className={styles.sectionTitulo}>
                    <h1 className="bold-text">
                        Menos caos. <br /> Más claridad.
                    </h1>
                </header>
            </ScrollReveal>

            <ScrollReveal mode="clone" from="top" distance={0} duration={0.3} threshold={0.2}>
                <div className={styles.sectionContenido}>
                    <BotonNav dataCta="home-btn-1">HAZ TU NEGOCIO MÁS SIMPLE.</BotonNav>
                </div>
            </ScrollReveal>

            <div className={styles.sectionImagenes}>
                <ScrollReveal mode="clone" from="left" distance={50} duration={1} threshold={0.2} delay={0}>
                    <img src={img1} alt="Medio arco Amarillo" />
                </ScrollReveal>
                <ScrollReveal mode="clone" from="right" distance={0} duration={1} threshold={0.2} delay={0.2}>
                    <img src={img2} alt="Circulo naranjo" />
                </ScrollReveal>
                <ScrollReveal mode="clone" from="bottom" distance={0} duration={1} threshold={0.2} delay={0.2}>
                    <img src={img3} alt="Triangulo verde" />
                </ScrollReveal>
                <ScrollReveal mode="clone" from="left" distance={0} duration={1} threshold={0.2} delay={0.1}>
                    <img src={img4} alt="Hexagono azul" />
                </ScrollReveal>
                <ScrollReveal mode="clone" from="left" distance={0} duration={1} threshold={0.2} delay={0.1}>
                    <img src={img5} alt="Medio circulo morado" />
                </ScrollReveal>
            </div>
        </section>
    );
};
