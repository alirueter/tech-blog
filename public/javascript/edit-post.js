async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="titleInput"]').value.trim();
    const content = document.querySelector('textarea[name="contentInput"]').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (title && content) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                content
            }),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/dashboard')
        }
        else {
            alert(response.statusText)
        }
    }
}

document.querySelector('#edit-form').addEventListener('submit', editFormHandler);