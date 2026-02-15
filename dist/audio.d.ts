type NoiseType = {
    src: string;
    volume: number;
    pan: number;
    loop: boolean;
};
export default class Noise {
    private audioContext;
    private gainNode;
    private panner;
    private Source;
    private loop;
    audio: HTMLAudioElement;
    metaData: [];
    constructor({ src, volume, pan, loop }: Partial<NoiseType>);
    init(): void;
    onLoadedmetadata(callback: Function): Function;
    notifyEventListners(metadata: any): void;
    play(): Promise<void>;
    pause(): void;
}
export {};
//# sourceMappingURL=audio.d.ts.map