const Notes = require('../models/notes');

async function getNotes(req, res) {
    try {

        const userId = req.user.id;


        const userNotes = await Notes.findAll({
            where: {
                UserId: userId
            }
        });

        res.status(200).json({ notes: userNotes });
    } catch (error) {
        console.error('Error fetching notes:', error);
        res.status(500).json({ error: 'Failed to fetch notes' });
    }
}

module.exports = { getNotes };