import { type Metadata } from "./type";
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
    metaData: Array<(metadata: Metadata) => void>;
    constructor({ src, volume, pan, loop }: Partial<NoiseType>);
    init(): void;
    onLoadedmetadata(callback: (metadata: Metadata) => void): number | this;
    notifyEventListners(metadata: Metadata): void;
    play(): Promise<void>;
    pause(): void;
}
export {};
//# sourceMappingURL=audio.d.ts.map