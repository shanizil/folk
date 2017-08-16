import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../app.AlbumService';
import { Album } from '../model/Album.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})


export class AlbumsComponent implements OnInit {

  albums : Album[] =[];

  constructor(private AlbumService:AlbumService) {}

  ngOnInit() {
      this.AlbumService.getAlbums((a)=>{
      this.albums=a;
      console.log(this.albums);
    });
  }
  
}