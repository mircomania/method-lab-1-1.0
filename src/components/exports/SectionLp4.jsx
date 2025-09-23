import styles from '../../styles/modules/sectionLp4.module.css';

import icono1 from '../../assets/images/figura-1.1.png';
import icono2 from '../../assets/images/figura-2.1.png';
import icono3 from '../../assets/images/figura-3.1.png';
import icono4 from '../../assets/images/figura-4.png';
import icono5 from '../../assets/images/figura-5.1.png';

import { catsSectionLp4 } from '../utils/catsSectionLp4';

export const SectionLp4 = () => {
    const colors = ['var(--yellow-color)', 'var(--orange-color)', 'var(--gren-color)', 'var(--blue-color)', 'var(--purple-color)'];

    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionContenido}>
                <div className={styles.titulosContainer}>
                    <header className={styles.sectionTitulo}>
                        <h2 className="light-text">
                            <span className="bold-text">Method</span>ología.
                        </h2>
                    </header>

                    <div className={styles.listaContainer}>
                        {catsSectionLp4.map(({ id, titulo, texto }, index) => (
                            <div key={id} className={`${styles.listaItem} ${styles[`listaItem${index + 1}`]}`}>
                                <span className="bold-text" style={{ color: colors[index] }}>
                                    {id}
                                </span>

                                <h3 className="bold-text">{titulo}</h3>
                                <p className="light-text">{texto}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.plusContainer}>
                        <p className="bold-text">PLUS</p>
                    </div>
                </div>

                <div className={styles.iconosContainer}>
                    <img src={icono1} alt="" className={styles.icono1} />
                    <img src={icono2} alt="" className={styles.icono2} />
                    <img src={icono3} alt="" className={styles.icono3} />
                    <img src={icono4} alt="" className={styles.icono4} />
                    <img src={icono5} alt="" className={styles.icono5} />
                </div>
            </div>
        </section>
    );
};
