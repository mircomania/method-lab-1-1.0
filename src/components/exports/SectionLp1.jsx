import styles from '../../styles/modules/sectionLp1.module.css';

import { BotonNav } from '../utils/BotonNav';

import img1 from '../../assets/images/figura-1.png';
import img2 from '../../assets/images/figura-2.png';
import img3 from '../../assets/images/figura-3.png';
import img4 from '../../assets/images/figura-4.png';
import img5 from '../../assets/images/figura-5.png';

export const SectionLp1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h1 className="bold-text">
                    Menos caos. <br /> Más claridad.
                </h1>
            </header>

            <div className={styles.sectionContenido}>
                <BotonNav dataCta="home-btn-1">HAZ TU NEGOCIO MÁS SIMPLE.</BotonNav>
            </div>

            <div className={styles.sectionImagenes}>
                <img src={img1} alt="Medio arco Amarillo" />
                <img src={img2} alt="Circulo naranjo" />
                <img src={img3} alt="Triangulo verde" />
                <img src={img4} alt="Hexagono azul" />
                <img src={img5} alt="Medio circulo morado" />
            </div>
        </section>
    );
};
