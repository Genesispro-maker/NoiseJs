import { formatTime } from "./formatTime";
export default class Noise {
    audioContext;
    gainNode;
    panner;
    Source;
    loop;
    audio;
    duration;
    constructor({ src, volume = 1, pan = 0, loop = false }) {
        this.audioContext = new AudioContext();
        this.audio = new Audio(src);
        this.loop = this.audio.loop = loop;
        this.duration = this.audio.duration;
        this.Source = this.audioContext.createMediaElementSource(this.audio);
        this.gainNode = this.audioContext.createGain();
        this.panner = new StereoPannerNode(this.audioContext);
        this.audio.addEventListener("loadeddata", () => {
            this.duration = this.audio.duration;
        });
        this.gainNode.gain.value = volume;
        this.panner.pan.value = pan;
        this.Source.connect(this.panner).connect(this.gainNode).connect(this.audioContext.destination);
    }
    async play() {
        await this.audioContext.resume();
        this.audio.play();
    }
    pause() {
        this.audio.pause();
    }
}
//# sourceMappingURL=audio.js.map