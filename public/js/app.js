window.addEventListener('load', () => {
    const url = "http://localhost:3000/stream/requests"
    
    fetch('/stream/users_raw').then((response) => {
        response.json().then((data) => {
            console.log(data)
            console.log(Object.keys(data).length)
            for(var i = 0; Object.keys(data).length - 1 > i ; i++){
                    if(data[i]._id === data[Object.keys(data).length - 1]){

                    }
            else    {
                const list = document.querySelector('.user-list');

                const newListItem = document.createElement('div')

                const newNameField = document.createElement('div')
                const newName = document.createElement('div')

                const newDescription = document.createElement('div')
                const newOptions = document.createElement('div')
                const addFriend = document.createElement('div')

                newListItem.classList.add('user-list-item')
                newNameField.classList.add('user-name-space')
                newName.classList.add('user-name')

                newOptions.classList.add('options-space')
                addFriend.classList.add('send-friend')
                newDescription.classList.add('description-space')

                list.appendChild(newListItem)
                newListItem.appendChild(newNameField)
                newListItem.appendChild(newDescription)
                newListItem.appendChild(newOptions)

                newNameField.appendChild(newName)

                newOptions.appendChild(addFriend)

                newName.textContent = data[i].name
                addFriend.id = data[i]._id
                addFriend.textContent = "Add Friend"


                }
                
            }
        })

    })
    
    const xhr = new XMLHttpRequest();

    document.addEventListener('click', async event => {
        if (event.target.classList.contains('send-friend') || event.target.parentNode.classList.contains('send-friend')) {
            
            const data = event.target.id
            xhr.open("POST", url);
            
            
            if(data){
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(JSON.stringify({
                    data
                }));
            }
            
            
    }})

})

