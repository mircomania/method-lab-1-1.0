import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

//COMO USAR PROPS
// EJ: <Linea sectionRef={sectionRef} linea="hor" maxWidth={80} top={20} left={0} start={0.5} end={0.8} />

export const Linea = ({
    sectionRef,
    maxWidth,
    className,
    start = 0.1,
    end = 1,
    lineHeight = '2px',
    lineColor = 'var(--white-color)',
    top,
    bottom,
    left,
    right,
    linea,
}) => {
    // MANEJO DE RESPONSIVE (TOP, BOTTOM, LEFT, RIGHT, LINEHEIGHT)
    // para utilizar valores responsivos agregar ej: "top={{ default: 20, 1200: 20, 1700: 20 }}", "lineHeight={{ default: 2, 1200: 4 , 1700: 6 }}"
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getResponsiveValue = (prop) => {
        if (prop === undefined) return undefined;
        if (typeof prop === 'number' || typeof prop === 'string') return prop;
        const breakpoints = Object.keys(prop)
            .filter((k) => k !== 'default')
            .map((k) => parseInt(k))
            .sort((a, b) => a - b);
        let value = prop.default ?? 0;
        for (let bp of breakpoints) {
            if (screenWidth >= bp) value = prop[bp];
        }
        return value;
    };

    const dynamicTop = getResponsiveValue(top);
    const dynamicBottom = getResponsiveValue(bottom);
    const dynamicLeft = getResponsiveValue(left);
    const dynamicRight = getResponsiveValue(right);
    const dynamicLineHeight = getResponsiveValue(lineHeight);
    const dynamicMaxWidth = getResponsiveValue(maxWidth);
    const dynamicStart = getResponsiveValue(start);
    const dynamicEnd = getResponsiveValue(end);

    // CÁLCULO DEL PROGRESO DE LA LÍNEA
    const [progressValue, setProgressValue] = useState(0);

    useEffect(() => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
    }, [sectionRef, screenWidth]);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            setDimensions({ width: rect.width, height: rect.height });

            const sectionTop = rect.top + window.scrollY;
            const sectionHeight = rect.height;
            const scrollY = window.scrollY + window.innerHeight;

            let progress = (scrollY - sectionTop) / sectionHeight;

            if (progress < dynamicStart) setProgressValue(0);
            else if (progress >= dynamicEnd) setProgressValue(dynamicMaxWidth);
            else {
                const scaledProgress = ((progress - dynamicStart) / (dynamicEnd - dynamicStart)) * dynamicMaxWidth;
                setProgressValue(Math.min(dynamicMaxWidth, Math.max(0, scaledProgress)));
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // ← Ejecuta en montaje
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionRef, dynamicMaxWidth, dynamicStart, dynamicEnd]);

    // ESTILOS DE LA LÍNEA
    const style = {
        width:
            linea === 'hor'
                ? `${(progressValue / 100) * dimensions.width}px`
                : typeof dynamicLineHeight === 'number'
                ? `${dynamicLineHeight}px`
                : dynamicLineHeight,
        height:
            linea === 'ver'
                ? `${(progressValue / 100) * dimensions.height}px`
                : typeof dynamicLineHeight === 'number'
                ? `${dynamicLineHeight}px`
                : dynamicLineHeight,
        backgroundColor: lineColor,
        position: 'absolute',
        zIndex: 1,
        transition: 'width 0.1s ease-out, height 0.1s ease-out',
        ...(dynamicTop !== undefined ? { top: typeof dynamicTop === 'number' ? `${dynamicTop}px` : dynamicTop } : {}),
        ...(dynamicBottom !== undefined ? { bottom: typeof dynamicBottom === 'number' ? `${dynamicBottom}px` : dynamicBottom } : {}),
        ...(dynamicLeft !== undefined ? { left: typeof dynamicLeft === 'number' ? `${dynamicLeft}px` : dynamicLeft } : {}),
        ...(dynamicRight !== undefined ? { right: typeof dynamicRight === 'number' ? `${dynamicRight}px` : dynamicRight } : {}),
    };

    return <div className={className} style={style}></div>;
};

Linea.propTypes = {
    sectionRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
    maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.object]).isRequired,
    className: PropTypes.string,
    start: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    end: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
    lineColor: PropTypes.string,
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    right: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    linea: PropTypes.oneOf(['hor', 'ver']).isRequired,
};
