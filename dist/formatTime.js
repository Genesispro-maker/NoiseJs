export function formatTime(time) {
    if (isNaN(time))
        return;
    const abs = Math.abs(time);
    const min = Math.floor(abs / 60);
    const sec = Math.floor(abs % 60);
    return `${min}:${sec}`;
}
//# sourceMappingURL=formatTime.js.map