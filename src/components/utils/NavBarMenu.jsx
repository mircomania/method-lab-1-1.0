export const navLinks = [
    { id: 'inicio', to: '/', label: 'INICIO', title: 'Ir al inicio', dataLink: 'navbar-inicio-link' },
    {
        id: 'servicios',
        to: '#servicios',
        label: 'SERVICIOS',
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
        title: 'Qué metodología seguimos en Method Lab',
        dataLink: 'navbar-metodologia-link',
    },
    {
        id: 'monday',
        to: '#monday',
        label: 'MONDAY.COM',
        title: 'Conoce la aplicación Monday',
        dataLink: 'navbar-monday-link',
    },
    {
        id: 'nosotros',
        to: '#nosotros',
        label: 'SOBRE NOSOTROS',
        title: 'Por qué elegir Method Lab',
        dataLink: 'navbar-nosotros-link',
    },
    {
        id: 'contacto',
        to: '#contacto',
        label: 'DISEÑEMOS TU MÉTODO',
        title: 'Contacta con Method Lab',
        dataLink: 'navbar-contacto-link',
    },
];
