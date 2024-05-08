const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesPassword');
const userautheticate = require('../middleware/auth');

router.post('/password', userautheticate.authenticate, notesController.userNotesPassword);

module.exports = router;