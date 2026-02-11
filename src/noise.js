function formatTime(time) {
  if (isNaN(time)) return;
  const abs = Math.abs(time);
  const min = Math.floor(abs / 60);
  const sec = Math.floor(abs % 60);
  return `${min}:${sec.toString().padStart(2, "0")}`;
}

export default class Noise{
    constructor({src, volume = 1, pan = 0, loop = false}){
          this.audioContext = new AudioContext()
          this.audio = new Audio(src)
          this.loop = this.audio.loop = loop
          this.Source = this.audioContext.createMediaElementSource(this.audio)
          this.gainNode = this.audioContext.createGain()
          this.panner = new StereoPannerNode(this.audioContext)
          this.gainNode.gain.value = volume
          this.panner.pan.value = pan        

          this.Source.connect(this.panner).connect(this.gainNode).connect(this.audioContext.destination)

           this._duration = null;

            this.ready = new Promise((resolve) => {
                 this.audio.addEventListener("loadedmetadata", () => {
                 this._duration = formatTime(this.audio.duration);
                    resolve(this);
           });
      });
    }

    get currentTime(){
       return formatTime(this.audio.currentTime)
    }


    get duration() {
    return this._duration;
   }

    async play(){
        await this.audio.play()
    }

    

    pause(){
        this.audio.pause()
    }
}


const noise = new Noise({
    src: "/plenty.mp3"
})




const playbtn = document.querySelector(".play")

const h1 = document.createElement("h1")
h1.textContent = `${noise.duration}`



playbtn.addEventListener("click", () => {
   noise.play()
   document.body.append(h1)
})


//   this.audioContext = new AudioContext()
//         this.audio = new Audio(src)
//         this.loop = this.audio.loop = loop
//         this.currentTime = formatTime(this.audio.currentTime)
//         this.Source = this.audioContext.createMediaElementSource(this.audio)
//         this.gainNode = this.audioContext.createGain()
//         this.panner = new StereoPannerNode(this.audioContext)
//         this.gainNode.gain.value =  volume
//         this.panner.pan.value = pan

        
//         this.Source.connect(this.panner).connect(this.gainNode).connect(this.audioContext.destination)
    