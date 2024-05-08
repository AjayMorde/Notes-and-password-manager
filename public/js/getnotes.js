const btn = document.getElementById('btn')
btn.addEventListener('click', checkPassword)
async function checkPassword(event) {
    const password = document.getElementById("password")
    event.preventDefault()
    try {
        const token = localStorage.getItem("token")
        const response = await axios.get('/getnotespassword/getpassword', { headers: { "Authorization": token } })
        if (response.status == 200) {
            console.log('==================================>', response.data.Password)
            const userpassword = response.data.Password
            console.log(' === === === === === === === === === === === === === === === => ', password.value)
            if (userpassword === password.value) {

                console.log("inside if condition")

                async function getData() {
                    try {
                        const token = localStorage.getItem("token")
                        const res = await axios.get('/get/getnotes', { headers: { "Authorization": token } });
                        const data = res.data;

                        const notesContainer = document.getElementById('notes-container');
                        notesContainer.innerHTML = '';

                        data.notes.forEach(notes => {
                            const notesElement = document.createElement('div');
                            notesElement.classList.add('notes'); // Apply notes styling

                            const topicElement = document.createElement('div');
                            topicElement.classList.add('topic'); // Apply topic styling
                            topicElement.innerHTML = `<p><strong>Topic:</strong> ${notes.topic}</p>`;

                            const notesContentElement = document.createElement('div');
                            notesContentElement.innerHTML = `<p><strong>Notes:</strong> ${notes.notes}</p>`;

                            notesElement.appendChild(topicElement);
                            notesElement.appendChild(notesContentElement);

                            notesContainer.appendChild(notesElement);
                        });
                    } catch (err) {
                        console.error('Error fetching attendance notess:', err);
                    }
                }
                getData()

            } else {
                console.log("something went wrong")
            }
        }




    } catch (err) {
        console.log('Error to getting a password', err)

    }
}