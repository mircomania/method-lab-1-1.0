import styles from '../../styles/modules/form.module.css';

import { useForm } from '../../hooks/UseForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import PhoneInput from 'react-phone-input-2';
import { CustomSelect } from './CustomSelect';

import { tools } from './herramientasForm';
import { equipos } from './equipoForm';

export const Form = () => {
    const equipoOptions = equipos.map((e) => ({ value: e, label: e }));
    const toolsOptions = tools.map((e) => ({ value: e, label: e }));

    const { formData, errors, loading, handleChange, updateField, handleSubmit, showAlert } = useForm(
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
                    value={formData.telefono || ''}
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
                    placeholder=""
                    disablePlaceholder={true}
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
            <div className={styles.dobleInput2}>
                {/* EQUIPO */}
                <CustomSelect
                    label="¿Cuántos son en tu equipo?"
                    name="equipo"
                    options={equipoOptions}
                    value={formData.equipo}
                    onChange={updateField}
                    error={errors.equipo}
                    placeholder="Selecciona una cantidad"
                />

                {/* TOOL */}
                <CustomSelect
                    label="Usas alguna herramienta de gestión"
                    name="tool"
                    options={toolsOptions}
                    value={formData.tool}
                    onChange={updateField}
                    error={errors.tool}
                    placeholder="Selecciona una opción"
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
