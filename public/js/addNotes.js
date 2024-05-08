const usertopic = document.getElementById('topic')
const userpassword = document.getElementById('password')
const usernotes = document.getElementById('userNotes')


async function addData(event) {
    event.preventDefault();

    const topic = usertopic.value;
    const notes = usernotes.value
    const password = userpassword.value


    const data = {
        topic: topic,

        notes: notes
    };
    const notesPassword = {
        password: password
    }

    try {
        const token = localStorage.getItem("token")
        const response = await axios.post('/notes/addnotes', data, { headers: { "Authorization": token } });


        if (response.status == 200) {
            console.log('Note saved successfully:', response.data);

            alert("Notes saved Successfully")
            usertopic.value = ''
            usernotes.value = ''


        }

        const response1 = await axios.post('/addnotespassword/password', notesPassword, { headers: { "Authorization": token } });

        if (response1.status == 200) {
            alert("password created")
        } else {
            alert("Password alread created for notes")
        }


    } catch (error) {
        alert('You already created a password ,Write more Notes,Happy Writting')

    }
}