import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

//COMO USAR PROPS
// EJ: <LineaSvg sectionRef={sectionRef} d={{default:"M 0 50 ...",576:"M 0 50 ..."}} strokeWidth={{default:4,576:8}} start={{default:0.1,576:0.2}} end={{default:0.9,576:1}}/>

export const LineaSvg = ({ sectionRef, d, stroke = 'black', strokeWidth = 4, className = '', start = 0.1, end = 1 }) => {
    const svgRef = useRef(null);
    const lineRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Manejo responsive
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

    const dynamicD = getResponsiveValue(d);
    const dynamicStrokeWidth = getResponsiveValue(strokeWidth);
    const dynamicStart = getResponsiveValue(start);
    const dynamicEnd = getResponsiveValue(end);

    // CÁLCULO DEL PROGRESO DE LA LÍNEA
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionHeight = rect.height;

            const startPx = dynamicStart <= 1 ? windowHeight * dynamicStart : dynamicStart;
            const endPxRaw = dynamicEnd <= 1 ? sectionHeight * dynamicEnd : dynamicEnd;
            const endPx = Math.max(endPxRaw, 1);

            let visible = 0;
            if (rect.top < windowHeight - startPx && rect.bottom > 0) {
                const scrolled = Math.min(Math.max(windowHeight - rect.top - startPx, 0), endPx);
                visible = scrolled / endPx;
            }

            setProgress(visible);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionRef, dynamicStart, dynamicEnd, screenWidth]);

    // ANIMACION DEL TRAZO
    useEffect(() => {
        if (!lineRef.current) return;
        const pathLength = lineRef.current.getTotalLength();
        lineRef.current.style.strokeDasharray = pathLength;
        lineRef.current.style.strokeDashoffset = pathLength - pathLength * progress;
        lineRef.current.style.strokeWidth = dynamicStrokeWidth;
    }, [progress, dynamicD, dynamicStrokeWidth]);

    return (
        <svg ref={svgRef} className={`${'line-svg'} ${className}`} width="100%" height="100%">
            <path ref={lineRef} d={dynamicD} stroke={stroke} fill="transparent" strokeLinecap="round" />
        </svg>
    );
};

LineaSvg.propTypes = {
    sectionRef: PropTypes.object.isRequired,
    d: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
    className: PropTypes.string,
    start: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    end: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
};
