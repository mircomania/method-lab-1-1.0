import styles from '../../styles/modules/sectionLp3.module.css';
import logoMonday from '../../assets/images/logo-monday-blanco.png';

export const SectionLp3 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="light-text">Servicios.</h2>
            </header>

            <div className={styles.sectionContenido}>
                <h3 className="bold-text">
                    Realizamos un <span className={styles.palabra1}>diagnóstico</span> de tu empresa,{' '}
                    <span className={styles.palabra2}>implementamos</span> flujos y tableros en{' '}
                    <img src={logoMonday} alt="monday.com" className={styles.inlineLogo} /> y acompañamos a tu equipo con{' '}
                    <span className={styles.palabra3}>capacitación</span> continua.
                </h3>
            </div>
        </section>
    );
};
