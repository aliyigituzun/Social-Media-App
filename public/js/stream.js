window.addEventListener('load', () => {
    
    

    fetch('/stream/post-raw').then((response) => {
        
        response.json().then((data) => {
            console.log(data)
            for(let i = 0; i < Object.keys(data).length; i++){
                const content = document.querySelector('.post-wrapper');
                console.log(content)

                const post = document.createElement('div')
                const title = document.createElement('div')
                const description = document.createElement('div')

                post.classList.add('post')
                post.classList.add('stream-post')
                description.classList.add('description-text')
                title.classList.add('title-text')
                

                title.textContent = data[i][0].title
                description.textContent = data[i][0].description
                
                content.appendChild(post)
                post.appendChild(title)
                post.appendChild(description)
            }
        
    })

})

document.addEventListener('click', async event => {
    if(event.target.classList.contains('new-post') || event.target.parentNode.classList.contains('new-post')){
        window.location.href = '/stream/post'
    }

})

})

