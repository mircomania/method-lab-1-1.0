import { useRef } from 'react';

import styles from '../../styles/modules/sectionLp4.module.css';

import icono1 from '../../assets/images/figura-1.1.png';
import icono2 from '../../assets/images/figura-2.1.png';
import icono3 from '../../assets/images/figura-3.1.png';
import icono4 from '../../assets/images/figura-4.png';
import icono5 from '../../assets/images/figura-5.1.png';

import { useMediaQuery } from '../../hooks/UseMediaQuery';

import { catsSectionLp4 } from '../utils/catsSectionLp4';

import { ScrollReveal } from '../utils/ScrollReveal';

export const SectionLp4 = () => {
    const isMobile = useMediaQuery('(max-width: 1199px)');
    const lineRef = useRef(null);
    const colors = ['var(--yellow-color)', 'var(--orange-color)', 'var(--gren-color)', 'var(--blue-color)', 'var(--purple-color)'];

    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionContenido}>
                <ScrollReveal mode="wrap" from="left" threshold={0.2}>
                    <div ref={lineRef} className={styles.titulosContainer}>
                        <header className={`${styles.sectionTitulo} ${styles.lineTrigger}`}>
                            <h2 className="light-text">
                                <span className="bold-text">Method</span>ología.
                            </h2>
                        </header>

                        <div className={styles.listaContainer}>
                            {catsSectionLp4.map(({ id, titulo, texto, duration }, index) => (
                                <ScrollReveal mode="wrap" key={id} from="left" distance={50} duration={duration} threshold={0.2}>
                                    <div key={id} className={`${styles.listaItem} ${styles[`listaItem${index + 1}`]}`} data-group={index + 1}>
                                        <span className="bold-text" style={{ color: colors[index] }}>
                                            {id}
                                        </span>

                                        <h3 className="bold-text">{titulo}</h3>
                                        <p className="light-text">{texto}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        <div className={styles.plusContainer} data-group="5">
                            <p className="bold-text">PLUS</p>
                        </div>
                    </div>
                </ScrollReveal>

                <div className={styles.iconosContainer}>
                    <ScrollReveal mode="wrap" from={isMobile ? 'left' : 'right'} distance={50} duration={0.3} threshold={0.2}>
                        <img src={icono1} alt="" className={styles.icono1} data-group="1" />
                    </ScrollReveal>
                    <ScrollReveal mode="wrap" from={isMobile ? 'left' : 'right'} distance={50} duration={0.3} threshold={0.2}>
                        <img src={icono2} alt="" className={styles.icono2} data-group="2" />
                    </ScrollReveal>
                    <ScrollReveal mode="wrap" from={isMobile ? 'left' : 'right'} distance={50} duration={0.3} threshold={0.2}>
                        <img src={icono3} alt="" className={styles.icono3} data-group="3" />
                    </ScrollReveal>
                    <ScrollReveal mode="wrap" from={isMobile ? 'left' : 'right'} distance={50} duration={0.3} threshold={0.2}>
                        <img src={icono4} alt="" className={styles.icono4} data-group="4" />
                    </ScrollReveal>
                    <ScrollReveal mode="wrap" from={isMobile ? 'left' : 'right'} distance={50} duration={0.3} threshold={0.2}>
                        <img src={icono5} alt="" className={styles.icono5} data-group="5" />
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};
