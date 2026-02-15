type NoiseType = {
    src: string;
    volume: number;
    pan: number;
    loop: boolean;
};
interface Metadata {
    title: string | undefined;
    duration: string | undefined;
    fileExt: string | undefined;
    currentTime: string | undefined;
}
export default class Noise {
    private audioContext;
    private gainNode;
    private panner;
    private Source;
    private loop;
    audio: HTMLAudioElement;
    metaData: Array<(metadata: Metadata) => void>;
    constructor({ src, volume, pan, loop }: Partial<NoiseType>);
    private init;
    onLoadedmetadata(callback: (metadata: Metadata) => void): number | this;
    notifyEventListners(metadata: Metadata): void;
    play(): Promise<void>;
    pause(): void;
}
export {};
//# sourceMappingURL=audio.d.ts.map