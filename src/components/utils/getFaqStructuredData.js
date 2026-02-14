const stripMarkdown = (text) =>
    text
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1') // links
        .replace(/[*_~`>#-]/g, '') // símbolos
        .replace(/\n+/g, ' ')
        .trim();

export const getFaqStructuredData = (faqData) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: stripMarkdown(item.answer),
        },
    })),
});
