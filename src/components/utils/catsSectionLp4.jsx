import styles from '../../styles/modules/sectionLp4.module.css';

import logoMonday from '../../assets/images/logo-monday-negro.png';

export const catsSectionLp4 = [
    {
        id: '01.',
        titulo: 'Diagnóstico inicial.',
        texto: 'Entrevistas y levantamiento de información. Identificación de áreas críticas.',
    },
    {
        id: '02.',
        titulo: 'Solución digital a la medida.',
        texto: 'Diseño de procesos y flujos visuales en Lucidchart.',
    },
    {
        id: '03.',
        titulo: 'Implementación tecnológica.',
        texto: (
            <>
                Configuramos <img src={logoMonday} alt="monday.com" className={styles.inlineLogo} loading="lazy" decoding="async" /> <br /> llave en
                mano, adaptado a tu operación.
            </>
        ),
    },
    {
        id: '04.',
        titulo: 'Onboarding y adopción.',
        texto: 'Capacitamos a tu equipo, migramos datos y aseguramos la correcta adopción.',
    },
    {
        id: '05.',
        titulo: 'Customer Success.',
        texto: 'Acompañamiento de 6 a 12 meses, con reportes y mejoras continuas para maximizar resultados.',
    },
];
