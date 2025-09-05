import styles from '../../styles/modules/sectionLp4.module.css';

import icono1 from '../../assets/images/figura-1.1.png';
import icono2 from '../../assets/images/figura-2.1.png';
import icono3 from '../../assets/images/figura-3.1.png';
import icono4 from '../../assets/images/figura-4.png';
import icono5 from '../../assets/images/figura-5.1.png';

import { catsSectionLp4 } from '../utils/catsSectionLp4';

export const SectionLp4 = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionContenido}>
                <div className={styles.titulosContainer}>
                    <header className={styles.sectionTitulo}>
                        <h2 className="light-text">
                            <strong>Method</strong>ología.
                        </h2>
                    </header>

                    {catsSectionLp4.map(({ id, titulo, texto }, index) => (
                        <div key={id} className={styles.listaContainer}>
                            <div className={styles.listaItem}>
                                <span className="bold-text">{id}</span>

                                <div>
                                    <h3 className="bold-text">{titulo}</h3>
                                    <p className="light-text">{texto}</p>
                                </div>
                            </div>

                            {index < catsSectionLp4.length - 1 && <hr />}
                        </div>
                    ))}

                    <div className={styles.plusContainer}>
                        <p className="bold-text">PLUS</p>
                    </div>
                </div>

                <div className={styles.iconosContainer}>
                    <img src={icono1} alt="" />

                    <img src={icono2} alt="" />

                    <img src={icono3} alt="" />

                    <img src={icono4} alt="" />

                    <img src={icono5} alt="" />
                </div>
            </div>
        </section>
    );
};
