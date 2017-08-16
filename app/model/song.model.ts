export class Song {
  public songName: string;
  public singerName: string;
  public name:string;
  public time:string;
  public likes:number;
  public songImg:string;
  


  constructor(songName: string, singerName: string, name: string, time: string, likes: number , songImg:string) {
    console.log("constructor " + singerName);
    this.songName = songName;
    this.singerName = singerName;
    this.name = name;
    this.time = time;
    this.likes = likes;
    this.songImg = songImg;

  }
}