import { Track } from "./track.js";
import { flame } from "./visualizers/flame.js";

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const visualizers = [
    flame
]

const run = () => {
    const track = new Track('./static/GORYACHOHOLODNO_175_135.mp3') 
    const renderFrame = () => {
        requestAnimationFrame(renderFrame);

        const width = window.innerWidth || 0
        const height = window.innerHeight || 0

        canvas.width = width;
        canvas.height = height;
        ctx.clearRect(0, 0, width, height)
        // for (const visualization of visualizers) {
        //   visualization.apply({ctx, width, height, centerX: width / 2, centerY: height / 2, freqs: track.getByteFrequencyData()});
        // }
        for (const visualization of visualizers) {
            visualization.apply({ctx, width, height, freqs: track.getByteFrequencyData()});
        }
    };
    renderFrame()
}
run()