const express = require('express');
const router = express.Router();
const { customDataGetData } = require('../customdata/getdata');

router.post('/getdata', customDataGetData);

module.exports = router;