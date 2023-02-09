import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }

  data_movies:any=[];
  data_genres:any=[];
  data_years:any=[];
  data_watchlater:any=[];
  data_favorite:any=[];


  getdata_bymoives(){
  this.data_movies=this.http.get("http://localhost:3000/movies").toPromise();
  return this.data_movies;
}

  getdata_bygenres(){
    this.data_genres=this.http.get("http://localhost:3000/genres").toPromise();
    return this.data_genres;
}

  getdata_byyears(){
      this.data_years=this.http.get("http://localhost:3000/years").toPromise();
      return this.data_years;
}
getdata_watchlater(){
  this.data_watchlater=this.http.get("http://localhost:3000/watchlater").toPromise();
  return this.data_watchlater;
}

getdata_favorite(){
  this.data_favorite=this.http.get("http://localhost:3000/favorite").toPromise();
  return this.data_favorite;
}
      
}
