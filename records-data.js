export const records = [
    { 
        name: 'Led Zeppelin II',
        artist: 'Led Zeppelin',
        genre: 'Rock',
        image: './assets/led-zep.png',
    },
    {
        name: 'Trials of Van Occupanther',
        artist: 'Midlake',
        genre: 'soft-rock/folk',
        image: './assets/trials.png',
    },
    {
        name: 'Worlds',
        artist: 'Porter Robinson',
        genre: 'Electronic',
        image: './assets/worlds.png',
    }
];

export function renderRecord(record) {

    const div = document.createElement('div');
    div.classList.add('record');

    const h1 = document.createElement('h1');
    h1.textContent = record.name;

    const h2 = document.createElement('h2');
    h2.textContent = `${record.name} is a ${record.genre} album recorded by ${record.artist}.`;

    const img = document.createElement('img');
    img.src = record.image;

    div.append(h1, h2, img);
    return div;
}