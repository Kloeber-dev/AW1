function findLyrics(artist, song) {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
}

const form = document.querySelector('#lyrics_form');
form.addEventListener('submit', e1 => {
    e1.preventDefault();
    doSubmit();
})

async function doSubmit() {
    const lyrics_e1 = document.querySelector('#lyrics');
    const artist = document.querySelector('#artist');
    const song = document.querySelector('#song');


    try {
        const lyricsresponse = await findLyrics(artist.value, song.value);
        const data = await lyricsresponse.json();
        if (data.lyrics)
            lyrics_e1.innerHTML = data.lyrics;
        else
            lyrics_e1.innerHTML = data.error;
    } catch (err) {
        console.log(err);
    }
}
