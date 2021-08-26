function getPhotos() {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(data => displayPhotos(data));
}
getPhotos();

function displayPhotos(photos) {
    const photoContainer = document.getElementById('photos');
    for (const photo of photos) {
        const newPhoto = document.createElement('img');
        newPhoto.setAttribute('src', `${photo.url}`);
        photoContainer.appendChild(newPhoto);
    }
}