const express = require('express');
const router = express.Router();
const notesController = require('../controllers/getNotesPassword');
const userautheticate = require('../middleware/auth');


router.get('/getpassword', userautheticate.authenticate, notesController.getPassword);
module.exports = router;