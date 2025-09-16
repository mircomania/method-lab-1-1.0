export const navLinks = [
    { id: 'inicio', to: '/', label: 'INICIO', label2: 'Inicio', title: 'Ir al inicio', dataLink: 'navbar-inicio-link' },
    {
        id: 'servicios',
        to: '#servicios',
        label: 'SERVICIOS',
        label2: 'Servicios',
        title: 'Conoce los servicios de Method Lab',
        dataLink: 'navbar-servicios-link',
    },
    {
        id: 'metodologia',
        to: '#metodologia',
        label: (
            <>
                <span className="bold-text">METHOD</span>OLOGÍA
            </>
        ),
        label2: (
            <>
                <span className="bold-text">Method</span>ología
            </>
        ),
        title: 'Qué metodología seguimos en Method Lab',
        dataLink: 'navbar-metodologia-link',
    },
    {
        id: 'monday',
        to: '#monday',
        label: 'MONDAY.COM',
        label2: 'Monday.com',
        title: 'Conoce la aplicación Monday',
        dataLink: 'navbar-monday-link',
    },
    {
        id: 'nosotros',
        to: '#nosotros',
        label: 'SOBRE NOSOTROS',
        label2: 'Sobre Nosotros',
        title: 'Por qué elegir Method Lab',
        dataLink: 'navbar-nosotros-link',
    },
    {
        id: 'contacto',
        to: '#contacto',
        label: 'DISEÑEMOS TU MÉTODO',
        label2: 'Contáctanos',
        title: 'Contacta con Method Lab',
        dataLink: 'navbar-contacto-link',
    },
];
