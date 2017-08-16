import { Component, OnInit ,Input} from '@angular/core';
import { Song } from '../model/song.model';
import {SongService} from '../app.SongService';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})


export class PlaylistComponent implements OnInit {


songs : Song[] =[];



  constructor(private SongService:SongService) {}

  ngOnInit() { 
    this.SongService.getSongs((s)=>{
      this.songs=s;
      console.log(this.songs);
    });
  }
  
}