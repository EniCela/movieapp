import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } 
    from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClient ,HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from "angular-bootstrap-md";
import{NgxPaginationModule}from 'ngx-pagination';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { WatchlaterComponent } from './watchlater/watchlater.component';
import { FavoritemovieComponent } from './favoritemovie/favoritemovie.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    MovieComponent,
    MoviedetailComponent,
    WatchlaterComponent,
    FavoritemovieComponent,
    
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
