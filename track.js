export class Track {
    constructor(src) {
        this.audio = new Audio(src)
        this.audio.controls = true;
        this.audio.type = 'audio/mp3';
        this.audio.loop = true;

        this.audio.play();
    }
}