const blogDiv = document.querySelector('#blogBG');
const commentBtn = document.querySelector('.btn-comment')
const btnDiv = document.querySelector('.center');
const newComment = document.querySelector('#comment')

const addComment = async (event) => {
  const id = event.target.getAttribute('data-id');

  const comment = newComment.value;
  const blog_id = parseInt(id);

  const response = await fetch(`/api/comment`, {
    method: 'POST',
    body: JSON.stringify({ comment, blog_id }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    // document.querySelector('#comment').value = '';
    document.location.reload('/blogs');
  }
}
// comment.setAttribute("style", "visibility: hidden;");
// var commentTEXT = document.createElement("textarea");
// var saveBtn = document.createElement("button");


// commentTEXT.setAttribute('style', 'background-color: white; width: 60%;display: block;margin-left: auto;margin-right: auto;');
// saveBtn.setAttribute('class', 'btn btn-sm btn-save');
// saveBtn.setAttribute('style', 'margin: auto');
// saveBtn.textContent = 'save';

// btnDiv.appendChild(commentTEXT);
// btnDiv.appendChild(saveBtn);

// if (commentTEXT) {
//     saveBtn.addEventListener('click', async () => {
//         const text = commentTEXT.value;
//         comment.setAttribute("style", "visibility: visible;");
//         saveBtn.setAttribute("style", "display: none;");
//         commentTEXT.setAttribute("style", "display: none;");
//         console.log


commentBtn.addEventListener('click', addComment);