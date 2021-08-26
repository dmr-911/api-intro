function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => displayUsers(data));
}
getUsers();

function displayUsers(users) {
    const usersContainer = document.getElementById('users');
    for (const user of users) {
        const singeUser = document.createElement('div');
        singeUser.classList.add('user');
        singeUser.innerHTML = `
        <h3>Name: ${user.username}</h3> 
        <p>Email: ${user.email}</p>
        `;
        usersContainer.appendChild(singeUser);
    }
}

function addPosst() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "My new post",
            body: "This is my post",
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })
        .then(res => res.json())
        .then(data => console.log(data));
}
addPosst();