const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id");
const url = 'https://my-json-server.typicode.com/markiankalychak/mrk123/users';
const sellerName = document.querySelector(".seller__name");
const sellerPhoto = document.querySelector(".seller__photo");

fetch(url)
    .then(response => response.json())
    .then(users => {
        const {
            name,
            photo_url
        } = users[id];

        sellerName.innerHTML = name;
        sellerPhoto.setAttribute("src", photo_url)
    })
    