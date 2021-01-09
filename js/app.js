document.addEventListener( 'DOMContentLoaded', () => {                      // THIS EVENT IS TRIGGERED AS THE PAGE LOADS.

    // ADD BUTTON //
    const addButton = document.querySelector('#add-button');                // (1) 'ADD BUTTON' WILL BE OUR TRIGGER
    addButton.addEventListener ('click', addToPlaylist);                    // (2) EVENT LISTENER WILL BE A CLICK THAT WILL EXECUTE addToPlaylist
})

const addToPlaylist = function (newSong) {                                  // newSong will be the user input (after form submission)
    newSong.preventDefault ();
    console.log('un pollo');
}
