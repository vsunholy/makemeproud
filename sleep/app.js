const btn = document.querySelector('button');
const p = document.querySelector('p');
const url = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', getJoke);

function getJoke() {
    p.innerText = 'Loading...'; // Show loading message
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            p.innerText = data.value; // Display the joke
        })
        .catch(error => {
            p.innerText = `Error: ${error.message}`; // Display error message
        });
}
