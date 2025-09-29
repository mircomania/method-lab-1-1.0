// {"data":{"boards":[{"id":"18019885324","name":"👤 Logos Web","columns":[{"id":"name","title":"Name","type":"name"},{"id":"file_mkw28adj","title":"Logotipo","type":"file"}]}]},"extensions":{"request_id":"03380ad3-ccfb-9ba6-b3b1-ce869c06ac4f"}}

const express = require('express');
const { getLogos } = require('../controllers/logosController');
const router = express.Router();

router.get('/', getLogos);

module.exports = router;
