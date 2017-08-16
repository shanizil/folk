import {EventEmitter,Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Album } from './model/album.model';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AlbumService{

    private albums:Album[] = [];


    constructor(private http:Http){}


    getAlbums(callback:Function){
            this.http.get(`http://localhost:3000/getAllAlbums`)
            // this.http.get('https://defolk-ws.herokuapp.com/getAllAlbums','')
            .subscribe(
                (res:Response) => {
                    callback(res.json());
                    console.log(this.albums);
                },
                (error =>{
                    console.log(error);
                    callback(null);
                })
            );
    }   

}