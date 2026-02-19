import img1 from '../../assets/images/home/section1/figura-1.webp';
import img2 from '../../assets/images/home/section1/figura-2.webp';
import img3 from '../../assets/images/home/section1/figura-3.webp';
import img4 from '../../assets/images/home/section1/figura-4.webp';
import img5 from '../../assets/images/home/section1/figura-5.webp';

export const Cargando = () => {
    return (
        <div className="cargando-container">
            <img src={img1} alt="Medio arco Amarillo" />
            <img src={img2} alt="Circulo naranjo" />
            <img src={img3} alt="Triangulo verde" />
            <img src={img4} alt="Hexagono azul" />
            <img src={img5} alt="Medio circulo morado" />
        </div>
    );
};
