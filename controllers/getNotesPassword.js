const notesPassword = require('../models/notesPassword')
const getPassword = async(req, res) => {
    try {
        const userId = req.user.id;

        // Find the password for the user ID
        const existingPassword = await notesPassword.findOne({
            where: {
                UserId: userId
            }
        });
        console.log('=================================================>', existingPassword.password)

        if (!existingPassword) {
            return res.status(404).json({ error: 'Password not found for the user' });
        } else {
            return res.status(200).json({ message: "Password retrieved successfully", Password: existingPassword.password });
        }

    } catch (error) {
        console.log('Error retrieving password:', error);
        return res.status(500).json({ error: 'Failed to retrieve password' });
    }
}



module.exports = { getPassword }