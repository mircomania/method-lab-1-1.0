import styles from '../../styles/modules/politicasPage.module.css';

import { NavLink } from 'react-router-dom';

import { BotonNav } from '../utils/BotonNav';

const POLITICAS_LINK = (
    <NavLink to="/" title="ir a methodlab.mx" data-link="politicas-home-link">
        Method Lab<span className="registered">®</span>
    </NavLink>
);

export const SectionPp1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header>
                <h1 className="bold-text">Aviso de privacidad</h1>
            </header>

            <div className={`${styles.sectionContenido} light-text`}>
                <p>
                    {POLITICAS_LINK}, con domicilio en Monterrey, Nuevo León, México, es responsable del uso y protección de los datos personales que
                    recaba a través de su sitio web y demás medios digitales, en cumplimiento con la Ley Federal de Protección de Datos Personales en
                    Posesión de los Particulares y demás disposiciones aplicables en México.
                </p>

                <p>
                    Los datos personales que podremos recabar incluyen nombre completo, correo electrónico, número telefónico, nombre de la empresa,
                    puesto e información relacionada con su operación empresarial. Estos datos serán utilizados principalmente para atender
                    solicitudes de información, elaborar propuestas comerciales, brindar los servicios contratados, dar seguimiento a proyectos,
                    mantener comunicación profesional y cumplir obligaciones contractuales y fiscales. De manera adicional, podremos utilizar su
                    información para el envío de contenido informativo, invitaciones, materiales educativos o comunicaciones relacionadas con nuestros
                    servicios, siempre permitiéndole manifestar su negativa para estas finalidades secundarias en cualquier momento.
                </p>

                <p>
                    {POLITICAS_LINK} no vende ni comercializa datos personales. Sus datos únicamente podrán ser compartidos cuando sea necesario para
                    cumplir obligaciones legales, atender requerimientos de autoridad competente o colaborar con proveedores tecnológicos y aliados
                    estratégicos estrictamente necesarios para la prestación de nuestros servicios, garantizando en todo momento la confidencialidad y
                    protección adecuada de la información.
                </p>

                <p>
                    Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales, así como a revocar el
                    consentimiento otorgado para su uso. Para ejercer cualquiera de estos derechos deberá enviar una solicitud al correo electrónico
                    oficial de {POLITICAS_LINK}, indicando su nombre completo, un medio para comunicarle la respuesta y la descripción clara de los
                    datos respecto de los cuales desea ejercer algún derecho. La solicitud será atendida dentro de los plazos establecidos por la
                    legislación aplicable.
                </p>

                <p>
                    Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar la experiencia de navegación, analizar tráfico y
                    optimizar contenido. Usted puede deshabilitar el uso de cookies desde la configuración de su navegador; sin embargo, algunas
                    funcionalidades del sitio podrían verse limitadas.
                </p>

                <p>
                    {POLITICAS_LINK} implementa medidas administrativas, técnicas y físicas razonables para proteger sus datos personales contra daño,
                    pérdida, alteración, destrucción o uso no autorizado. El acceso a la información está restringido únicamente a personal autorizado
                    que requiere conocerla para el cumplimiento de sus funciones.
                </p>

                <p>
                    {POLITICAS_LINK} podrá modificar o actualizar el presente Aviso de Privacidad en cualquier momento para reflejar cambios legales,
                    regulatorios o internos. Cualquier modificación será publicada en este mismo sitio web.
                </p>

                <p>
                    Al proporcionar sus datos personales a través de nuestro sitio, usted reconoce haber leído y comprendido el presente Aviso de
                    Privacidad.
                </p>
            </div>

            <BotonNav to="/" ariaLabel="Ir a la página de inicio" title="Haz clic para ir a la página de inicio" dataLink="polilicas-home-btn">
                VOLVER AL INICIO.
            </BotonNav>
        </section>
    );
};
