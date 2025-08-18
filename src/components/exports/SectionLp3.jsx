import styles from '../../styles/modules/sectionLp3.module.css';
import { catsSectionLp3 } from '../utils/catsSectionLp3';

export const SectionLp3 = () => {
    return (
        <section className={styles.sectionContainer}>
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
