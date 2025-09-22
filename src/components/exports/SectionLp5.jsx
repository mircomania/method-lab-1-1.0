import styles from '../../styles/modules/sectionLp5.module.css';

import logoMonday from '../../assets/images/logo-monday-negro.png';
import img2 from '../../assets/images/img-section-5-2.png';
import img3 from '../../assets/images/img-section-5-3.png';
import img4 from '../../assets/images/img-section-5-4.png';
import img5 from '../../assets/images/img-section-5-5.png';
import img6 from '../../assets/images/img-section-5-6.png';
import img7 from '../../assets/images/img-section-5-7.png';

export const SectionLp5 = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionContenido}>
                <div className={`${styles.dobleWrap} ${styles.cont1}`}>
                    <img src={logoMonday} alt="" />
                </div>

                <div className={`${styles.singleWrap} ${styles.cont2}`}></div>

                <div className={`${styles.singleWrap} ${styles.cont3}`}>
                    <img src={img2} alt="" />
                </div>

                <div className={`${styles.singleWrap} ${styles.cont4}`}>
                    <img src={img3} alt="" />
                </div>

                <div className={`${styles.singleWrap} ${styles.cont5}`}>
                    <p className="light-text">
                        Como solución <br /> tecnológica:
                    </p>
                </div>

                <div className={`${styles.singleWrap} ${styles.cont6}`}>
                    <p className="light-text">
                        Es para líderes <br /> y colaboradores.
                    </p>
                </div>

                <div className={`${styles.dobleWrap} ${styles.cont7}`}>
                    <img src={img4} alt="" />
                </div>

                <div className={`${styles.singleWrap} ${styles.cont8}`}>
                    <p className="light-text">
                        Es <br /> extremadamente <br /> fácil de usar.
                    </p>
                </div>

                <div className={`${styles.singleWrap} ${styles.cont9}`}>
                    <p className="light-text">
                        Nuestros clientes <br /> no invierten tiempo <br /> en desarrollo.
                    </p>
                </div>

                <div className={`${styles.singleWrap} ${styles.cont10}`}>
                    <img src={img5} alt="" />
                </div>

                <div className={`${styles.singleWrap} ${styles.cont11}`}>
                    <p className="light-text">
                        Nosotros lo <br /> hacemos todo, <br /> desde cero <br /> y a la medida.
                    </p>
                </div>

                <div className={`${styles.singleWrap} ${styles.cont12}`}>
                    <img src={img6} alt="" />
                </div>

                <div className={`${styles.singleWrap} ${styles.cont13}`}>
                    <img src={img7} alt="" />
                </div>
            </div>
        </section>
    );
};
