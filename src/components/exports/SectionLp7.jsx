import styles from '../../styles/modules/sectionLp7.module.css';

import { useSectionLp7 } from '../../hooks/UseSectionLp7';

import { Cargando } from '../utils/Cargando';
import { ErrorCarga } from '../utils/ErrorCarga';

export const SectionLp7 = () => {
    const { logos, comentarios, loading, error } = useSectionLp7();

    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="light-text">Ellos ya encontraron su método.</h2>
            </header>

            <div className={styles.sectionContenido}>
                {loading && (
                    <div className={styles.contenidoAdicional1}>
                        <Cargando />
                    </div>
                )}

                {!loading && error && (
                    <div className={styles.contenidoAdicional2}>
                        <ErrorCarga />
                    </div>
                )}

                {!loading && !error && (
                    <>
                        <div className={styles.sectionComentarios}>
                            {comentarios.map((c) => (
                                <div key={c.id} className={styles.comentario}>
                                    <div className={styles.comentarioPersona}>
                                        <img src={c.foto} alt={c.nombre} />

                                        <div className={styles.comentarioDatos}>
                                            <h3 className="bold-text">{c.nombre}</h3>
                                            <h4 className="light-text">{c.cargo}</h4>
                                        </div>
                                    </div>

                                    <p className="light-text">{c.comentario}</p>
                                </div>
                            ))}
                        </div>

                        <div className={styles.sectionLogos}>
                            {logos.map((l) => (
                                <img key={l.id} src={l.logotipo} alt={l.nombre} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};
