import { TitleSEO } from '../utils/TitleSEO';

import { SectionFp1 } from '../exports/SectionFp1';
import { SectionLp8 } from '../exports/SectionLp8';

const FaqPage = () => {
    return (
        <main>
            <TitleSEO
                title="Method Lab | FAQ"
                description="Encuentra respuestas claras y rápidas a las dudas más comunes sobre el servicio de Method Lab."
                canonical="https://methodlab.mx/faq"
            />

            <SectionFp1 />

            <SectionLp8 />
        </main>
    );
};

export default FaqPage;
