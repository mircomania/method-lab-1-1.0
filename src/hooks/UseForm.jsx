import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export const useForm = (initialState, submitCallback) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [utmParams, setUtmParams] = useState({});

    useEffect(() => {
        const DAYS_TO_EXPIRE = 15;
        const MS_IN_ONE_DAY = 1000 * 60 * 60 * 24;
        const now = Date.now();

        const urlParams = new URLSearchParams(window.location.search);
        const utmSource = urlParams.get('utm_source') || '';
        const utmMedium = urlParams.get('utm_medium') || '';
        const utmCampaign = urlParams.get('utm_campaign') || '';

        const storedData = localStorage.getItem('utmParams');

        if (utmSource || utmMedium || utmCampaign) {
            // Nuevos UTM encontrados → guardar en localStorage con timestamp
            const newParams = { utmSource, utmMedium, utmCampaign, timestamp: now };
            localStorage.setItem('utmParams', JSON.stringify(newParams));
            setUtmParams(newParams);
        } else if (storedData) {
            // No hay en URL → recuperar de localStorage
            const parsedData = JSON.parse(storedData);
            const ageInDays = (now - parsedData.timestamp) / MS_IN_ONE_DAY;

            if (ageInDays <= DAYS_TO_EXPIRE) {
                setUtmParams(parsedData);
            } else {
                // Expirado → eliminar
                localStorage.removeItem('utmParams');
            }
        }
    }, []);

    const showAlert = (title, message, icon, color) => {
        Swal.fire({
            title,
            html: `<div class="light-text"><p>${message}</p></div>`,
            icon,
            confirmButtonColor: color,
            scrollbarPadding: false,
            customClass: {
                title: 'bold-text',
            },
            willOpen: () => {
                document.body.style.overflow = 'auto';
            },
            willClose: () => {
                document.body.style.overflow = 'auto';
            },
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'telefono') {
            const cleanValue = value.replace(/\D/g, '');
            const formattedValue = cleanValue.startsWith('52') ? '+' + cleanValue : '+52' + cleanValue;
            setFormData((prev) => ({ ...prev, telefono: formattedValue }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }

        setErrors((prev) => {
            return Object.fromEntries(Object.entries(prev).filter(([key]) => key !== name));
        });
    };

    const validateForm = () => {
        const newErrors = {};

        validateNombre(newErrors);

        validateApellido(newErrors);

        validateEmpresa(newErrors);

        validateRol(newErrors);

        validateEquipo(newErrors);

        validateTool(newErrors);

        validateEmail(newErrors);

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateNombre = (newErrors) => {
        if (!formData.nombre.trim()) {
            newErrors.nombre = true;
        }
    };

    const validateApellido = (newErrors) => {
        if (!formData.apellido.trim()) {
            newErrors.apellido = true;
        }
    };

    const validateEmpresa = (newErrors) => {
        if (!formData.empresa.trim()) {
            newErrors.empresa = true;
        }
    };

    const validateRol = (newErrors) => {
        if (!formData.rol.trim()) {
            newErrors.rol = true;
        }
    };

    const validateEquipo = (newErrors) => {
        if (!formData.equipo.trim()) {
            newErrors.equipo = true;
        }
    };

    const validateTool = (newErrors) => {
        if (!formData.tool.trim() || formData.tool === 'N/A') {
            newErrors.tool = true;
        }
    };

    const validateEmail = (newErrors) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            newErrors.email = true;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);

        try {
            const utmWithoutTimestamp = (({ timestamp, ...rest }) => rest)(utmParams);

            const formDataToSend = {
                nombre: formData.nombre,
                apellido: formData.apellido,
                empresa: formData.empresa,
                rol: formData.rol,
                equipo: formData.equipo,
                tool: formData.tool,
                email: formData.email,
                ...utmWithoutTimestamp,
            };
            //'http://localhost:5000/submit'
            const response = await fetch('/backend/submit.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formDataToSend),
            });

            const data = await response.json();

            if (response.ok) {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({ event: 'formulario_enviado' });
                submitCallback(true, data);
                resetForm();
            } else {
                submitCallback(false, data);
            }
        } catch (error) {
            submitCallback(false, error);
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setFormData(initialState);
        setErrors({});
    };

    return { formData, errors, loading, handleChange, handleSubmit, showAlert };
};
