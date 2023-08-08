
function fetchMeme(data){
    data.preventDefault();

    const search = input.Value;
    console.log(search)
    fetch(`https://api.imgflip.com/get_memes`)
    .then(respose => respose.json())
    .then(data =>{
        console.log(data)
    })
 }
 
//  form.addEventListener('submit',fetchMeme);

// Function to display memes on the page
function displayMemes() {
    const memesContainer = document.getElementById("memesContainer");
    memesContainer.innerHTML = "";

    memes.forEach((meme) => {
        const memeDiv = document.createElement("div");
        const memeImg = document.createElement("img");
        memeImg.src = 'https://github.com/topics/imgflip-api';
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

    // Add code here to handle actual comment 
    console.log("Posting comment:", comment);

    // Clear the input field after posting the comment
    commentInput.value = "";

    // Refresh the displayed comments 
    displayComments(["Comment posted: " + comment]);
}

// Function to handle search input
function handleSearch() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.toLowerCase();

    // Filter memes based on the search term 
    const filteredMemes = memes.filter((meme) => meme.url.toLowerCase().includes(searchTerm));

    // Update the displayed memes
    displayMemes(filteredMemes);
}

// Event listeners
window.onload = function() {
    displayMemes();
    document.getElementById("searchInput").addEventListener("keyup", handleSearch);
};
 