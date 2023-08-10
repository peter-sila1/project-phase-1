const memeContainer = document.getElementById('memeContainer');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

const API_URL = 'https://api.imgflip.com/get_memes';

// Fetch meme data from the API
async function fetchMemes() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data.data.memes;
    } catch (error) {
        console.error('Error fetching memes:', error);
        return [];
    }
}

// Display memes in the memeContainer
function displayMemes(memes) {
    memeContainer.innerHTML = '';
    memes.forEach(meme => {
        const memeDiv = document.createElement('div');
        memeDiv.className = 'meme';
        memeDiv.innerHTML = `
            <img src="${meme.url}" alt="${meme.name}">
            <p>${meme.name}</p>
            <span class="favorite" data-id="${meme.id}">❤️ Favorite</span>
        `;
        memeContainer.appendChild(memeDiv);
    });
}

// Fetch and display memes when the page loads
fetchMemes().then(memes => {
    displayMemes(memes);
});

// Handle search button click
searchButton.addEventListener('click', async () => {
    const searchTerm = searchInput.value.toLowerCase();
    const memes = await fetchMemes();
    const filteredMemes = memes.filter(meme => meme.name.toLowerCase().includes(searchTerm));
    displayMemes(filteredMemes);
});

// Handle favorite button click
memeContainer.addEventListener('click', event => {
    if (event.target.classList.contains('favorite')) {
        const memeId = event.target.getAttribute('data-id');
        // Handle favorite logic click
        console.log(`Favorite clicked for meme with ID: ${memeId}`);
    }

    
});



