interface Song {
    songName: string;
    singerName: string;
    printSongInfo(songName: string, singerName: string): string
}

const song1: Song = {
    songName: 'Natural',
    singerName: 'Imagin Dragon',
    printSongInfo: (songName, singerName) => {
        return `Song: ${songName}, Singer: ${singerName}`
    }
}

console.log(song1.printSongInfo("Natural", "Imagin Dragon"));
