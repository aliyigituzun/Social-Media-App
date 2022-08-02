window.addEventListener('load', () => {

    

    
    fetch('/stream/inbox_raw').then((response) => {
        
        response.json().then((data) => {
            console.log(data)
            console.log(Object.keys(data).length)
            for(var i = 0; Object.keys(data).length > i ; i++){

            
                const list = document.querySelector('.user-list');

                const newListItem = document.createElement('div')

                const newNameField = document.createElement('div')
                const newName = document.createElement('div')

                const newDescription = document.createElement('div')
                const newOptions = document.createElement('div')
                const deleteFriend = document.createElement('div')

                newListItem.classList.add('user-list-item')
                newNameField.classList.add('user-name-space')
                newName.classList.add('user-name')

                newOptions.classList.add('options-space')
                deleteFriend.classList.add('send-friend')
                newDescription.classList.add('description-space')

                list.appendChild(newListItem)
                newListItem.appendChild(newNameField)
                newListItem.appendChild(newDescription)
                newListItem.appendChild(newOptions)

                newNameField.appendChild(newName)

                newOptions.appendChild(deleteFriend)

                newName.textContent = data[0][i].name
                deleteFriend.id = data[0][i]._id
                deleteFriend.textContent = "Delete Friend"
                
            }

        })

    }) 
})