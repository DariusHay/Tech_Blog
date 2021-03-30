const blogDiv = document.querySelector('#blogBG');
const comment = document.querySelector('.btn-comment')
const btnDiv = document.querySelector('.center'); 

const addComment = async () => {
    comment.setAttribute("style", "visibility: hidden;");
    var commentTEXT = document.createElement("textarea");
    var saveBtn = document.createElement("button");
    
     
    commentTEXT.setAttribute('style', 'background-color: white; width: 60%;display: block;margin-left: auto;margin-right: auto;');
    saveBtn.setAttribute('class', 'btn btn-sm btn-save');
    saveBtn.setAttribute('style', 'margin: auto');
    saveBtn.textContent = 'save';

    btnDiv.appendChild(commentTEXT);
    btnDiv.appendChild(saveBtn);

    if (commentTEXT) {
        saveBtn.addEventListener('click', () => {
            const text = commentTEXT.value;
            comment.setAttribute("style", "visibility: visible;");
            saveBtn.setAttribute("style", "display: none;");
            commentTEXT.setAttribute("style", "display: none;");
            
            
        })
    }
}

comment.addEventListener('click', addComment);