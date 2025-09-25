function getEquipoStatusId(equipo) {
    switch (equipo) {
        case '1 a 10 personas':
            return { index: 0 };
        case '11 a 20 personas':
            return { index: 1 };
        case 'Más de 20 personas':
            return { index: 2 };
        default:
            return null;
    }
}

function getToolStatusId(tool) {
    switch (tool) {
        case 'Sí, y funciona bien':
            return { index: 0 };
        case 'Sí, pero no funciona como esperamos':
            return { index: 1 };
        case 'No usamos ningún software':
            return { index: 2 };
        default:
            return null;
    }
}

module.exports = { getEquipoStatusId, getToolStatusId };
