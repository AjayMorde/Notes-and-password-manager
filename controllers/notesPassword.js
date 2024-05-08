const notesPassword = require('../models/notesPassword')

const userNotesPassword = async(req, res) => {
    try {

        const password = req.body.password

        const existingPassword = await notesPassword.findOne({
            where: {
                UserId: req.user.id
            }
        });

        if (existingPassword) {
            return res.status(201).json({ msg: 'You already created a password ,Write more Notes,Happy Writting' });
        } else {
            const newPassword = await notesPassword.create({
                password: password,

                UserId: req.user.id
            })
            res.status(200).json({ message: "Password created Sucessfully", Password: newPassword })
        }

    } catch (error) {
        console.log('Error to create notes Password', error)
        res.status(404).json({ error: 'Failed to create a password' });
    }
}






module.exports = { userNotesPassword }