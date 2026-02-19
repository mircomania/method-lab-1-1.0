import styles from '../../styles/modules/sectionFp1.module.css';

import { getFaqStructuredData } from '../utils/getFaqStructuredData';
import { faqData } from '../utils/faqData';

import { BotonNav } from '../utils/BotonNav';

import { HelmetProvider } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';

import { useMediaQuery } from '../../hooks/UseMediaQuery';

const faqStructuredData = getFaqStructuredData(faqData);

const markdownComponents = {
    a: ({ href, children, ...props }) => {
        const isExternal = href?.startsWith('http');

        return (
            <a href={href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : undefined} {...props}>
                {children}
            </a>
        );
    },
};

const renderFaq = ({ id, question, answer }) => (
    <div key={id} className={styles.faqItem}>
        <h3 className="light-text">
            <span className={styles.faqHighlight}>{question}</span>
        </h3>

        <div className={`${styles.faqRespuesta} light-text`}>
            <ReactMarkdown components={markdownComponents}>{answer}</ReactMarkdown>
        </div>
    </div>
);

export const SectionFp1 = () => {
    const isDesktop = useMediaQuery('(min-width: 1200px)');

    return (
        <section className={styles.sectionContainer}>
            <HelmetProvider>
                <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
            </HelmetProvider>

            {/* TITULO */}
            <header>
                <h1 className="bold-text">FAQs</h1>
            </header>

            {/* PREGUNTAS */}
            {!isDesktop && <div className={styles.sectionContenido}>{faqData.map(renderFaq)}</div>}

            {isDesktop && (
                <div className={styles.sectionGrid}>
                    <div className={styles.colLeft}>{faqData.filter((_, i) => i % 2 === 0 && i < 9).map(renderFaq)}</div>

                    <div className={styles.colRight}>{faqData.filter((_, i) => i % 2 === 1 || i >= 9).map(renderFaq)}</div>
                </div>
            )}

            {/* BOTON */}
            <BotonNav to="/" dataLink="faq-home-btn">
                VOLVER AL INICIO.
            </BotonNav>
        </section>
    );
};
