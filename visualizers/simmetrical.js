export function sim() {
    const {ctx, height, width, freqs} = this;
    for (const i in freqs) {
        ctx.lineWidth = 1;
        ctx.fillStyle = 'black'
        ctx.lineCap = 'round';
        ctx.beginPath()
        ctx.fillRect(i * (width / 10), height / 2, (width / 2 / 10), freqs[i])
        ctx.fillRect(i * (width / 10), height / 2, (width / 2 / 10), -freqs[i])
    }
}