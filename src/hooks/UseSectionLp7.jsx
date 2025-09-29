import { useEffect, useState } from 'react';

export const useSectionLp7 = () => {
    const [logos, setLogos] = useState([]);
    const [comentarios, setComentarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [logosRes, comentariosRes] = await Promise.all([
                    fetch('http://localhost:5000/logos'),
                    fetch('http://localhost:5000/comentarios'),
                ]);

                if (!logosRes.ok || !comentariosRes.ok) {
                    throw new Error('Error al cargar datos');
                }

                const logosData = await logosRes.json();
                const comentariosData = await comentariosRes.json();

                setLogos(logosData);
                setComentarios(comentariosData);
            } catch (err) {
                setError(err.message);
                console.error('Error en useSectionLp7:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { logos, comentarios, loading, error };
};
