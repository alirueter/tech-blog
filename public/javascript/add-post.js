async function newPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="post-content"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'post',
        body: JSON.stringify({
            title,
            content
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } 
    else {
        alert(response.statusText)
    }
}

function showNewPost() {
    const newPostForm = document.querySelector("#create-new-post");
    // newPostForm.style.display = "block";
    const newPostBtn = document.querySelector("#new-post-btn");
    
}

document.querySelector('.new-post-form').addEventListener('submit', newPostHandler);
document.querySelector('#new-post-btn').addEventListener('click', showNewPost);