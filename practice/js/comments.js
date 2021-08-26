function getComments() {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(data => displayComments(data));
}
getComments();

function displayComments(comments) {
    const commentsContainer = document.getElementById('comments');
    for (const comment of comments) {
        const newComment = document.createElement('p');
        newComment.classList.add('comment');
        newComment.innerText = `YOUR COMMENT : ${comment.body}`;

        commentsContainer.appendChild(newComment);
    }
}