import styles from '../../styles/modules/sectionLp8.module.css';

import img1 from '../../assets/images/figura-1.png';
import img2 from '../../assets/images/figura-2.png';
import img3 from '../../assets/images/figura-3.png';
import img5 from '../../assets/images/figura-5.png';

import { Form } from '../form/Form';

import { ScrollReveal } from '../utils/ScrollReveal';

export const SectionLp8 = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.corteSection}></div>

            <div className={styles.sectionContenido}>
                <div className={styles.contenido}>
                    <div className={styles.sectionText}>
                        <ScrollReveal mode="clone" from="left" distance={30} duration={0.3} threshold={0.2}>
                            <header className={styles.sectionTitulo}>
                                <h2 className="bold-text">Diseñemos tu método.</h2>
                            </header>
                        </ScrollReveal>

                        <p className="light-text">
                            ¿Listo para trabajar con orden, foco y resultados? Tu negocio no necesita más esfuerzo, necesita estructura.
                        </p>

                        <p className="light-text">
                            Agenda una llamada gratuita con nosotros y descubre cómo podemos ayudarte a transformar tu empresa.
                        </p>
                    </div>

                    <div className={styles.sectionForm}>
                        <Form />
                    </div>
                </div>

                <div className={styles.sectionImagenes}>
                    <img src={img1} alt="Medio arco Amarillo" />
                    <img src={img2} alt="Circulo naranjo" />
                    <img src={img3} alt="Triangulo verde" />
                    <img src={img5} alt="Medio circulo morado" />
                </div>
            </div>
        </section>
    );
};
