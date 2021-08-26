function loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => displayPosts(data))
}
loadPosts();

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts');
    for (const post of posts) {
        const newPost = document.createElement('div');
        newPost.classList.add('post')
        newPost.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        `;
        postsContainer.appendChild(newPost);
    }
}