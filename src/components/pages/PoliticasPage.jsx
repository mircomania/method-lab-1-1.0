import { TitleSEO } from '../utils/TitleSEO';

import { SectionPp1 } from '../exports/SectionPp1';
import { SectionLp8 } from '../exports/SectionLp8';

const PoliticasPage = () => {
    return (
        <main>
            <TitleSEO
                title="Method Lab | Política de Privacidad"
                description="Conoce cómo protegemos y utilizamos tu información personal en nuestra plataforma de Method Lab."
                canonical="https://methodlab.mx/politica-privacidad"
            />

            <SectionPp1 />

            <SectionLp8 />
        </main>
    );
};

export default PoliticasPage;
