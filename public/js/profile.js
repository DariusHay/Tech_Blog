const blogs = document.querySelector('#blogBG');

const newFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#blog-name').value.trim();
    const text = document.querySelector('#blog-text').value.trim();
   

    if (name && text) {
        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify({ name, text }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
            alert(`Your new blog, ${name}, was successfully created!`)
        } else {
            alert('Failed to create blog')
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/blogs/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
            alert('Blog deleted')
        } else {
            alert('Failed to delete blog')
        }
    };

}
document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);

if (blogs) {
document
    .querySelector('.btn-danger')
    .addEventListener('click', delButtonHandler);
}