class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time}s of ${this.title}!`);
  }
}

const myVideo1 = new Video("how to use Classes in Javascript", "Anas", 25000);
myVideo1.watch();
const myVideo2 = new Video("how to cook tajine", "Abdellah", 456031);
