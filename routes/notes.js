const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notes');
const userautheticate = require('../middleware/auth');

router.post('/addnotes', userautheticate.authenticate, notesController.addNote);



module.exports = router; 