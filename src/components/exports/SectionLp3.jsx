import styles from '../../styles/modules/sectionLp3.module.css';

import { useRef } from 'react';

import { catsSectionLp3 } from '../utils/catsSectionLp3';
import { Linea } from '../utils/Linea';

export const SectionLp3 = () => {
    const sectionRef = useRef(null);

    return (
        <section ref={sectionRef} className={styles.sectionContainer}>
            <Linea
                sectionRef={sectionRef}
                linea="hor"
                start={{ default: 0.1 }}
                end={{ default: 0.3, 576: 0.5, 1200: 0.7, 1400: 0.8, 1700: 1 }}
                maxWidth={{ default: 90, 576: 80 }}
                top={{ default: 10, 576: 20, 1200: 40 }}
                left={{ default: 0 }}
            />
            <Linea
                sectionRef={sectionRef}
                linea="ver"
                start={{ default: 0.1 }}
                end={{ default: 0.9, 768: 0.5, 1200: 0.7, 1400: 0.8, 1700: 1 }}
                maxWidth={{ default: 98, 768: 90 }}
                bottom={{ default: 0 }}
                right={{ default: '2%', 576: '15%', 768: '4%', 1400: '2%' }}
            />
            <Linea
                sectionRef={sectionRef}
                linea="ver"
                start={{ default: 0.1 }}
                end={{ default: 0.9, 1700: 1 }}
                maxWidth={{ default: 80, 768: 50, 1200: 60, 1400: 70 }}
                bottom={{ default: 0 }}
                right={{ default: '4%', 576: '18%', 768: '6%', 1400: '4%' }}
            />

            <header className={styles.sectionTitulo}>
                <h2 className="light-text">Nuestros Servicios.</h2>
            </header>

            <div className={styles.sectionContenido}>
                <div className={styles.sectionCards}>
                    {catsSectionLp3.map((item) => (
                        <div key={item.id} className={styles.card}>
                            <img src={item.icono} alt={item.titulo} />

                            <span className="bold-text">{item.id}</span>

                            <h3 className="bold-text">{item.titulo}</h3>

                            <p className="light-text">{item.texto}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
