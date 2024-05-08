const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./connection/database')
const users = require('./routes/user')
const loginuser = require('./routes/login')
const notes = require('./routes/notes')
const getnotes = require('./routes/getNotes')
const notesPassword = require('./routes/notesPassword')
const getNotesPassword = require('./routes/getNotesPassword')
const forgotPassword = require('./routes/forgotPassword');


const port = 4500;
app.use(cors());
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


~
app.get('/login', (req, res) => {
    res.sendFile('login.html', { root: 'views' })
})
app.get('/home', (req, res) => {
    res.sendFile('home.html', { root: 'views' })
})
app.get('/forgotpassword', (req, res) => {
    res.sendFile('forgotpassword.html', { root: 'views' })
})
app.get('/write', (req, res) => {
    res.sendFile('write.html', { root: 'views' })
})

app.get('/edit', (req, res) => {
    res.sendFile('edit.html', { root: 'views' })
})

app.get('/getNotes', (req, res) => {
    res.sendFile('getNotes.html', { root: 'views' })
})
app.use('/signup', users);
app.use('/login', loginuser)
app.use('/password', forgotPassword);
app.use('/notes', notes)
app.use('/get', getnotes)
app.use('/addnotespassword', notesPassword)
app.use('/getnotespassword', getNotesPassword)

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("server is running on port 4500")
    })
}).catch((err) => {
    console.log(err)

})