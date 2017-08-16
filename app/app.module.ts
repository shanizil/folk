import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SongService } from './app.SongService';
import { AlbumService } from './app.AlbumService';
import { AlbumsComponent } from './albums/albums.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentService } from './app.CommentService';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { PlayerComponent } from './main/player/player.component';
import { FooterComponent } from './main/footer/footer.component';
import { MainIntroComponent } from './main/main-intro/main-intro.component';
import { IntroNavComponent } from './main/main-intro/intro-nav/intro-nav.component';
import { IntroFavoriteComponent } from './main/main-intro/intro-favorite/intro-favorite.component';
import { IntroAlbumsComponent } from './main/main-intro/intro-albums/intro-albums.component';
import { IntroPopularComponent } from './main/main-intro/intro-popular/intro-popular.component';
import { AlbumItemComponent } from './app-shared/album-item/album-item.component';
import { EnterComponent } from './enter/enter.component';
import { EnterHeaderComponent } from './enter/enter-header/enter-header.component';
import { EnterMainComponent } from './enter/enter-main/enter-main.component';
import { AuthComponent } from './enter/enter-main/auth/auth.component';
import { EraComponent } from './enter/enter-main/era/era.component';
import { InstrumentComponent } from './enter/enter-main/instrument/instrument.component';
import { EnvironmentComponent } from './enter/enter-main/environment/environment.component';
import { RyhtmComponent } from './enter/enter-main/ryhtm/ryhtm.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path: 'era', component: EraComponent},
  {path: 'instrument', component: InstrumentComponent},
  {path: 'environment', component: EnvironmentComponent},
  {path: 'ryhtm', component: RyhtmComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    AlbumsComponent,
    CommentsComponent,
    MainComponent,
    HeaderComponent,
    PlayerComponent,
    FooterComponent,
    MainIntroComponent,
    IntroNavComponent,
    IntroFavoriteComponent,
    IntroAlbumsComponent,
    IntroPopularComponent,
    AlbumItemComponent,
    EnterComponent,
    EnterHeaderComponent,
    EnterMainComponent,
    AuthComponent,
    EraComponent,
    InstrumentComponent,
    EnvironmentComponent,
    RyhtmComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [RouterModule],
  providers: [SongService,AlbumService,CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
