const API_KEY = "AIzaSyBSn988LMb-dtaYkGeGEpG3PvVzyYcgWFY";

const search_button = document.querySelector(".search-button");

search_button.addEventListener("click", () => {
    const user = document.getElementById("search-box").value;
    // const user_author = document.getElementById("author-box").value.split(" ").join("");
    console.log(user);

    const book_list = document.querySelector(".book-list");

    // fetch api data
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(user)}&key=${API_KEY}`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error("There has been a problem with your fetch operation:", error));
})