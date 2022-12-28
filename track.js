export class Track {
    constructor(src) {
        this.audio = new Audio(src)
        this.audio.controls = true;
        this.audio.type = 'audio/mp3';
        this.audio.loop = true;

        this.audio.play();

        this.context = new AudioContext();
        this.analyser = this.context.createAnalyser();
        this.source = this.context.createMediaElementSource(this.audio);
        this.source.connect(this.analyser);
        this.source.connect(this.context.destination);

        this.analyser.fftSize = 1024;
    }
    
    getByteFrequencyData() {
        const data = new Uint8Array(this.analyser.frequencyBinCount);
        this.analyser.getByteFrequencyData(data);
    
        return data;
    }
}