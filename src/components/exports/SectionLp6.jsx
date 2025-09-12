import styles from '../../styles/modules/sectionLp6.module.css';

import imgSection from '../../assets/images/img-section-6-1.png';

export const SectionLp6 = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionContenido}>
                <div className={styles.cont1}>
                    <header className={styles.sectionTitulo}>
                        <h2 className="bold-text">
                            Method Lab<span className="registered">®</span> Founder
                        </h2>
                    </header>

                    <p className="light-text">
                        Soy <strong>David Cano</strong>, fundador de Method Lab<span className="registered">®</span>.
                    </p>

                    <p className="light-text">
                        Desde el 2019 ayudo a líderes y equipos a trabajar de forma más ordenada y productiva, dejando atrás el caos operativo para
                        enfocarse en lo que realmente importa.
                    </p>

                    <p className="light-text">
                        En Method Lab<span className="registered">®</span> diseñamos procesos de trabajo hechos a la medida, que combinan estructura,
                        claridad y tecnología para impulsar el liderazgo y la productividad.
                    </p>
                </div>

                <div className={styles.cont2}>
                    <img src={imgSection} alt="" />

                    <div className={styles.citaContainer}>
                        <p className="light-text">
                            &quot;El crecimiento de las empresas <br /> pueden suceder sin la necesidad de <br /> vivir bajo el caos&quot;
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
