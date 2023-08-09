async function fetchMemes() {
    try {
        const response = await fetch('https://api.imgflip.com/get_memes');
        const data = await response.json();
        console.log(data)
        return data.data.memes;
    } catch (error) {
        console.error('Error fetching memes:', error);
        return [];
    }
}

function displayMemes(memes) {
    const memesContainer = document.getElementById('memesContainer');
    memesContainer.innerHTML = '';
    var table = document.getElementById("memesCountainerTable");

    for (var i = 0; i < data.length; i++) {
      var row = document.createElement("tr");

      row.innerHTML = `
        <td>${data[i].first_meme}</td>
        <td>${data[i].last_meme}</td>
        <td>${data[i].favorite_meme}</td>
        <td>${data[i].long_meme}</td>
        <td><a href="#" class="btn btn-success">Edit</a></td>
        <td><a href="#" class="btn  btn-danger">Delete</a></td>
      `;

      table.appendChild(row);
    }
  }


    memes.forEach(meme => {
        const memeElement = document.createElement('div');
        memeElement.className = 'meme';

        const imgElement = document.createElement('img');
        imgElement.src = meme.url;

        const nameElement = document.createElement('h2');
        nameElement.src = meme.name;

        const memeTitle = document.createElement("h3");
      memeTitle.textContent = meme.name;

        memeElement.style.display = 'grid';
        memeElement.style.marginBottom = '20px';

        // console.log(imgElement);
        console.log(nameElement);

        const favoriteButton = document.createElement('button');
        favoriteButton.textContent = 'Favorite';
        favoriteButton.addEventListener('click', () => {
            // Add code to handle favorite functionality
            // You can store favorites in local storage or a database
        });

        memeElement.appendChild(imgElement);
        memeElement.appendChild(favoriteButton);

        memesContainer.appendChild(nameElement);

        memesContainer.appendChild(memeElement);
    });


async function searchMeme() {
    const searchInputs = document.getElementById('searchInput').value.toLowerCase();
    const memes = await fetchMemes();
    const filteredMemes = memes.filter(meme => meme.name.toLowerCase().includes(searchInputs));
    displayMemes(filteredMemes);
}

// Initial fetch and display
(async () => {
    const memes = await fetchMemes();
    displayMemes(memes);
})();