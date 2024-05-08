const Notes = require('../models/notes');


async function addNote(req, res) {
    try {
        const { topic, notes } = req.body;


        const newNote = await Notes.create({
            topic: topic,

            notes: notes,
            UserId: req.user.id
        });

        res.status(200).json({ message: 'Note added successfully', note: newNote });
    } catch (error) {
        console.error('Error adding note:', error);
        res.status(500).json({ error: 'Failed to add note' });
    }
}







module.exports = { addNote };