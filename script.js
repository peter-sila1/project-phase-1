// Sample meme data (Replace this with actual meme data from a backend)
const memes = [
    { url: "meme1.jpg", comments: ["Haha, this is funny!", "Nice one!"] },
    { url: "meme2.jpg", comments: ["LOL!", "This is epic!"] },
    // Add more meme objects here
];

// Function to display memes on the page
function displayMemes() {
    const memesContainer = document.getElementById("memesContainer");
    memesContainer.innerHTML = "";

    memes.forEach((meme) => {
        const memeDiv = document.createElement("div");
        const memeImg = document.createElement("img");
        memeImg.src = meme.url;
        memeDiv.appendChild(memeImg);
        memesContainer.appendChild(memeDiv);

        memeDiv.addEventListener("click", () => displayComments(meme.comments));
    });
}

// Function to display comments for a meme
function displayComments(comments) {
    const commentsContainer = document.getElementById("commentsContainer");
    commentsContainer.innerHTML = "";

    comments.forEach((comment) => {
        const commentDiv = document.createElement("div");
        commentDiv.textContent = comment;
        commentsContainer.appendChild(commentDiv);
    });
}

// Function to handle posting a comment
function postComment() {
    const commentInput = document.getElementById("commentInput");
    const comment = commentInput.value;

    // Add code here to handle actual comment posting to a backend (not implemented in this template)
    console.log("Posting comment:", comment);

    // Clear the input field after posting the comment
    commentInput.value = "";

    // Refresh the displayed comments (not needed when using a real backend)
    displayComments(["Comment posted: " + comment]);
}

// Function to handle search input
function handleSearch() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.toLowerCase();

    // Filter memes based on the search term (not needed when using a real backend)
    const filteredMemes = memes.filter((meme) => meme.url.toLowerCase().includes(searchTerm));

    // Update the displayed memes
    displayMemes(filteredMemes);
}

// Event listeners
window.onload = function() {
    displayMemes();
    document.getElementById("searchInput").addEventListener("keyup", handleSearch);
};
 