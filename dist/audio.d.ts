export default class Noise {
    private audioContext;
    private gainNode;
    private panner;
    private Source;
    private loop;
    private audio;
    duration: number;
    constructor({ src, volume, pan, loop }: {
        src: string;
        volume: number;
        pan: number;
        loop: boolean;
    });
    play(): Promise<void>;
    pause(): void;
}
//# sourceMappingURL=audio.d.ts.map