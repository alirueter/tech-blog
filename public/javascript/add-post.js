(async function newPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="titleInput"]').value.trim();
    const content = document.querySelector('textarea[name="contentInput"]').value;

    console.log(title);
    console.log(content);

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            contents: content
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert(response.statusText)
    }
})().catch(e => {console.error(e)})

document.querySelector('#submitBtn').addEventListener('click', newPostHandler);