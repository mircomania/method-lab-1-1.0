import { useEffect, useRef } from 'react';

import styles from '../../styles/modules/sectionLp7.module.css';

import { Comentarios } from '../utils/Comentarios';
import { ScrollReveal } from '../utils/ScrollReveal';
import { useMediaQuery } from '../../hooks/UseMediaQuery';

export const SectionLp7 = () => {
    const isMobile = useMediaQuery('(max-width: 1199px)');
    const comentarios = [...Comentarios, ...Comentarios];
    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const speed = 40;
        const width = track.scrollWidth / 2;
        const duration = width / speed;

        track.style.animationDuration = `${duration}s`;
    }, []);

    return (
        <section className={styles.sectionContainer}>
            <ScrollReveal mode="clone" from="right" distance={30} duration={0.3} disabled={isMobile} threshold={0.6}>
                <header>
                    <h2 className="light-text">Ellos ya encontraron su método.</h2>
                </header>
            </ScrollReveal>

            <div className={styles.slider}>
                <div ref={trackRef} className={styles.track}>
                    {comentarios.map((comentario, i) => (
                        <div key={i} className={styles.comentario}>
                            <div className={styles.comentarioPersona}>
                                <img src={comentario.img} alt={comentario.nombre} />

                                <div className={styles.comentarioDatos}>
                                    <h3 className="bold-text">{comentario.nombre}</h3>
                                    <h4 className="light-text">{comentario.empresa}</h4>
                                </div>
                            </div>

                            <p className="light-text">{comentario.texto}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
