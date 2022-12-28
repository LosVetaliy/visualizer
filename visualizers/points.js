export function points
() {
    const {ctx, height, width, freqs} = this;
    for (const i in freqs) {
        ctx.lineWidth = 1;
        ctx.fillStyle = 'black'
        ctx.beginPath()
        ctx.fillRect(i * (width / 512), height, (width / 512), -freqs[i])
    }
}