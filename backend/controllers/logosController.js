const axios = require('axios');

const getLogos = async (req, res) => {
    try {
        const query = `
            query {
                boards(ids: [${Number(process.env.LOGOS_BOARD_ID)}]) {
                    items_page {
                        items {
                            id
                            name
                            column_values {
                                id
                                text
                                value
                            }
                        }
                    }
                }
            }
        `;

        const response = await axios.post(
            'https://api.monday.com/v2',
            { query },
            {
                headers: {
                    Authorization: process.env.MONDAY_API_KEY,
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log('Respuesta completa Monday Logos:', JSON.stringify(response.data, null, 2));

        const boards = response.data.data?.boards || [];
        if (!boards.length) {
            return res.status(404).json({ message: 'No se encontraron items en Logos' });
        }

        const items = boards[0].items_page.items.map((item) => {
            const logoFile = item.column_values.find((c) => c.id === 'file_mkw28adj');
            return {
                id: item.id,
                nombre: item.name,
                logotipo: logoFile?.value ? JSON.parse(logoFile.value).files[0].url : null,
            };
        });

        res.status(200).json(items);
    } catch (error) {
        console.error('Error al obtener logos:', error.response?.data || error.message);
        res.status(500).json({ message: 'Error al obtener logos' });
    }
};

module.exports = { getLogos };
