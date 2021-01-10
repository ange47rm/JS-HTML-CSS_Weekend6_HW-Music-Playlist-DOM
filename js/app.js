document.addEventListener( 'DOMContentLoaded', () => {                      // THIS EVENT IS TRIGGERED AS THE PAGE LOADS.

    // FORM SUBMISSION //
    const formSubmit = document.querySelector('#new-song-form');            // (1) SELECT FORM OBJECT - THIS WILL BE OUR TRIGGER
    formSubmit.addEventListener ('submit', addToPlaylist);                  // (2) TRIGGER WILL BE ITS SUBMISSION, THAT WILL EXECUTE addToPlaylist

    // 'DELETE ALL' BUTTON //
    const deleteAll =  document.querySelector('#delete-button');               
    deleteAll.addEventListener ('click', resetPlaylist);
    
})

const addToPlaylist = function (formInput) {                                // newSong will be the user input (after form submission)
    formInput.preventDefault();
    
    const newSong = document.createElement('li');                           // (3) CREATE NEW DOM OBJECT TO CAPTURE FORM INPUT //
    
    newSong.textContent = `${formInput.target.author.value} - ${formInput.target.songtitle.value} (${formInput.target.genre.value})`  // (4) MANIPULATE THE NEWLY CREATED OBJECT - HERE WE DEFINE WHAT IT WILL LOOK LIKE (TEXT) //

    const songList = document.querySelector('ol');                          // (5) GRAB THE HTML ELEMENT WITHIN WHICH WE'LL PLACE THE NEW OBJECT ('ol') //
                                                                    
    songList.appendChild(newSong);                                          // (6) AND ATTACH NEW DOM OBJECT TO IT //
    document.getElementById('new-song-form').reset();
}

const resetPlaylist = function () {   
    const songList = document.querySelector('ol');

    songList.innerHTML = '';
}
