export class Album {
  // public albumImg: string;
  // public albumName: string;
  // public djName:string;
  // public djImg:string;
  // public followers:Number;
 

  constructor( public albumImg:   string,
               public albumName: string,
               public djName: string, 
               public djImg: string, 
               public followers: Number,
               public comment : [string],
               public genre : string,
               public song : [string],
               public instr : [string],
               public era : [string],
               public env : [string],
               public rythm: Number ) {
    // console.log("constructor " + albumImg);
    // this.albumImg = albumImg;
    // this.albumName = albumName;
    // this.djName = djName;
    // this.djImg = djImg;
    // this.followers = followers;
  }

}