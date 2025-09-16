import styles from '../../styles/modules/form.module.css';

import { useForm } from '../../hooks/UseForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { tools } from '../utils/herramientasForm';

export const Form = () => {
    const { formData, errors, loading, handleChange, handleSubmit, showAlert } = useForm(
        {
            nombre: '',
            apellido: '',
            empresa: '',
            rol: '',
            equipo: '',
            tool: '',
            email: '',
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
            <div className={styles.dobleInput}>
                {/* NOMBRE */}
                <div className={styles.campoPrecalificarForm}>
                    <label htmlFor="nombre" className={`light-text ${errors.nombre ? styles.labelError : ''}`} aria-label="Nombre del usuario">
                        Nombre
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

                {/* APELLIDO */}
                <div className={styles.campoPrecalificarForm}>
                    <label htmlFor="apellido" className={`light-text ${errors.apellido ? styles.labelError : ''}`} aria-label="Apellido del usuario">
                        Apellido
                    </label>
                    <input
                        type="text"
                        className={styles.formControl}
                        id="apellido"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        required
                        aria-invalid={!!errors.apellido}
                    />
                </div>
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
                <input
                    type="text"
                    className={styles.formControl}
                    id="equipo"
                    name="equipo"
                    value={formData.equipo}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.equipo}
                />
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
                    aria-invalid={!!errors.sesion}
                >
                    {tools.map((tool) => (
                        <option key={tool} value={tool}>
                            {tool}
                        </option>
                    ))}
                </select>
            </div>

            {/* EMAIL */}
            <div className={styles.campoPrecalificarForm}>
                <label htmlFor="email" className={`light-text ${errors.email ? styles.labelError : ''}`} aria-label="email del usuario">
                    Tu correo de contacto
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
