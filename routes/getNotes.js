const express = require('express');
const router = express.Router();
const getNotesController = require('../controllers/getNotes');
const userautheticate = require('../middleware/auth');


router.get('/getnotes', userautheticate.authenticate, getNotesController.getNotes);

module.exports = router;