const search_button = document.querySelector(".search-button");

// event listener for when clicking search button
search_button.addEventListener("click", () => {
    const user = document.getElementById("search-box").value;

    const book_list = document.querySelector(".book-list");
    // remove search result divs from previous search
    const remove_books = document.querySelectorAll(".books");
    if (remove_books != null) {
        remove_books.forEach(books => {
            books.remove();
        })
    }

    // fetch api data
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(user)}`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        for (let i = 0; i < data["items"].length; i++) {
            // storing various book information as string variables
            const title = data["items"][i]
            ["volumeInfo"]["title"];

            const authors = toString(data["items"][i]
            ["volumeInfo"]["authors"]);

            const categories = data["items"][i]
            ["volumeInfo"]["categories"];

            const description = data["items"][i]
            ["volumeInfo"]["description"];

            const newDiv = document.createElement("div");

            // sets class attribute of new book divs
            newDiv.setAttribute
                ("class", `books book${i}`);
            
            // changes inner text of each book (div)
            // used geeksforgeeks for how to create collapsible content section https://www.geeksforgeeks.org/how-to-create-a-collapsible-section-using-css-and-javascript/
            newDiv.innerHTML = `<b>${title}</b>
            <br>
            Authors: ${authors}
            <br>
            Categories: ${categories}
            <br>
            <button type="button" class="collapsible">
            Additional Info</button>
            <br>
            <div class="content">Summary: ${description} </div>`;

            // appends each new div to the end of the book list
            book_list.append(newDiv);
            console.log(data["items"][i]
            ["volumeInfo"]["authors"]);
        }
    })
    .catch(error => console.error("There has been a problem with your fetch operation:", error));
})

// adds event listener for collapsible book description
// used geeksforgeeks https://www.geeksforgeeks.org/how-to-create-a-collapsible-section-using-css-and-javascript/
var btn = document.getElementsByClassName("collapsible");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        }
        else {
            content.style.display = "block";
        }
    })
}

// function to return array of strings as text
function toString(arr) {
    let temp = "";
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            temp += `${arr[i]}`;
        }
        else {
            temp += `, ${arr[i]}`;
        }
    }
    return temp;
}