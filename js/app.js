document.addEventListener( 'DOMContentLoaded', () => {                      // THIS EVENT IS TRIGGERED AS THE PAGE LOADS.

    // ADD BUTTON //
    const addButton = document.querySelector('#new-song-form');             // (1) SELECT FORM OBJECT - THIS WILL BE OUR TRIGGER
    addButton.addEventListener ('submit', addToPlaylist);                   // (2) TRIGGER WILL BE ITS SUBMISSION, THAT WILL EXECUTE addToPlaylist
})

const addToPlaylist = function (formInput) {                                // newSong will be the user input (after form submission)
    formInput.preventDefault();
    // CREATE NEW DOM OBJECT TO CAPTURE FORM INPUT //
    const newSong = document.createElement('li');

    
    // MANIPULATE THE NEWLY CREATED OBJECT - HERE WE DEFINE WHAT IT WILL LOOK LIKE (TEXT) //
    newSong.textContent = `${formInput.target.author.value} - ${formInput.target.songtitle.value}`


    // GRAB THE HTML ELEMENT (in this case an 'ol') AND ATTACH NEW DOM OBJECT TO IT //
    const songList = document.querySelector('ol');
    songList.appendChild(newSong);
    document.getElementById('new-song-form').reset();
}
