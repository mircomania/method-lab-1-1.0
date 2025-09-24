import styles from '../../styles/modules/form.module.css';

import { useForm } from '../../hooks/UseForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import PhoneInput from 'react-phone-input-2';

import { tools } from '../utils/herramientasForm';
import { equipos } from '../utils/equipoForm';

export const Form = () => {
    const { formData, errors, loading, handleChange, handleSubmit, showAlert } = useForm(
        {
            nombre: '',
            email: '',
            telefono: '',
            empresa: '',
            rol: '',
            equipo: '',
            tool: '',
        },
        (success, data) => {
            if (success) {
                showAlert('Excelente', 'Datos enviados correctamente.<br>Pronto nos pondremos en contacto contigo.', 'success', '#7f8ac7');
            } else {
                showAlert('Ups', 'Hubo un error al enviar los datos.', 'error', '#ac3150');
            }
        }
    );

    return (
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
            {/* NOMBRE Y APELLIDO */}
            <div className={styles.campoPrecalificarForm}>
                <label htmlFor="nombre" className={`light-text ${errors.nombre ? styles.labelError : ''}`} aria-label="Nombre del usuario">
                    Nombre y apellido
                </label>
                <input
                    type="text"
                    className={styles.formControl}
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.nombre}
                />
            </div>

            {/* TELEFONO */}
            <div className={styles.campoPrecalificarForm}>
                <label htmlFor="telefono" className={`light-text ${errors.telefono ? styles.labelError : ''}`}>
                    Teléfono
                </label>
                <PhoneInput
                    country="mx"
                    value={formData.telefono}
                    /* onChange={(phone) => handleChange({ target: { name: 'telefono', value: phone } })} */
                    onChange={(phone) => {
                        const formatted = `+${phone}`;
                        handleChange({ target: { name: 'telefono', value: formatted } });
                    }}
                    inputClass={styles.formControl}
                    inputProps={{
                        name: 'telefono',
                        required: true,
                        autoComplete: 'tel',
                        id: 'telefono',
                        'aria-invalid': !!errors.telefono,
                    }}
                    enableSearch
                    preferredCountries={['mx', 'us']}
                />
            </div>

            {/* EMAIL */}
            <div className={styles.campoPrecalificarForm}>
                <label htmlFor="email" className={`light-text ${errors.email ? styles.labelError : ''}`} aria-label="email del usuario">
                    Correo electronico
                </label>
                <input
                    type="email"
                    className={styles.formControl}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                    aria-invalid={!!errors.email}
                />
            </div>

            <div className={styles.dobleInput}>
                {/* EMPRESA */}
                <div className={styles.campoPrecalificarForm}>
                    <label htmlFor="empresa" className={`light-text ${errors.empresa ? styles.labelError : ''}`} aria-label="Nombre de la empresa">
                        Nombre de tu empresa
                    </label>
                    <input
                        type="text"
                        className={styles.formControl}
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        required
                        aria-invalid={!!errors.empresa}
                    />
                </div>

                {/* ROL */}
                <div className={styles.campoPrecalificarForm}>
                    <label htmlFor="rol" className={`light-text ${errors.rol ? styles.labelError : ''}`} aria-label="Que rol tienes en la empresa">
                        Tu rol en la empresa
                    </label>
                    <input
                        type="text"
                        className={styles.formControl}
                        id="rol"
                        name="rol"
                        value={formData.rol}
                        onChange={handleChange}
                        required
                        aria-invalid={!!errors.rol}
                    />
                </div>
            </div>

            {/* EQUIPO */}
            <div className={styles.campoPrecalificarForm}>
                <label htmlFor="equipo" className={`light-text ${errors.equipo ? styles.labelError : ''}`} aria-label="¿Cuántos son en tu equipo?">
                    ¿Cuántos son en tu equipo?
                </label>
                <select
                    className={styles.formControl}
                    id="equipo"
                    name="equipo"
                    value={formData.equipo}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.equipo}
                >
                    <option value="">Selecciona una cantidad</option>
                    {equipos.map((equipo) => (
                        <option key={equipo} value={equipo}>
                            {equipo}
                        </option>
                    ))}
                </select>
            </div>

            {/* TOOL */}
            <div className={styles.campoPrecalificarForm}>
                <label
                    htmlFor="tool"
                    className={`light-text ${errors.tool ? styles.labelError : ''}`}
                    aria-label="Herramienta de gestión que pueda usar el usuario"
                >
                    Usas alguna herramienta de gestión
                </label>
                <select
                    className={styles.formControl}
                    id="tool"
                    name="tool"
                    value={formData.tool}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.tool}
                >
                    <option value="">Selecciona una herramienta</option>
                    {tools.map((tool) => (
                        <option key={tool} value={tool}>
                            {tool}
                        </option>
                    ))}
                </select>
            </div>

            {/* BOTON ENVIAR */}
            <div className={styles.contentEnvio}>
                <button type="submit" className="boton-2 light-text" disabled={loading}>
                    <span style={{ visibility: loading ? 'hidden' : 'visible' }}>ENVIAR.</span>
                    {loading && <FontAwesomeIcon icon={faSpinner} spin style={{ position: 'absolute' }} />}
                </button>
            </div>

            {Object.keys(errors).length > 0 && (
                <div className={styles.mensajeErrorGeneral}>
                    <p className="light-text">Por favor completa el formulario</p>
                </div>
            )}
        </form>
    );
};
