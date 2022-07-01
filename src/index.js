const init = () => {
  
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // e.target.searchByID.value;
        const input = document.querySelector('input#searchByID');

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(res => res.json())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');

            title.innerText = data.title;
            summary.innerText = data.summary;


        });

    })

}

document.addEventListener('DOMContentLoaded', init);


// Add event listeners to capture form data and override a form's default behavior
// Fetch data based on what the user types into that form
// Display that data on the page