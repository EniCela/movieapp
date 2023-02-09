import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataserviceService } from '../Service/dataservice.service';

@Component({
  selector: 'app-watchlater',
  templateUrl: './watchlater.component.html',
  styleUrls: ['./watchlater.component.css']
})
export class WatchlaterComponent implements OnInit {

  constructor(
    private data:DataserviceService,
    private http:HttpClient
  ) { }
  newarray2:any;
  watchlater:any;


  async ngOnInit(){
    // this.newarray2=localStorage.getItem("watchlater");
    this.watchlater=  await this.data.getdata_watchlater();
    //  console.log(this.watchlater)
  }
  playfunction(){
    alert ("filmi juaj do te hapet se shpejti ju lutem prisni ")
   }
   
   async deletewatchlatermovie(id:number){
    // delete nga localstorage*********************
    // let moviesss:any= localStorage.getItem('watchlater');
    // moviesss=JSON.parse(moviesss);
    // let index2=moviesss.findIndex((items:any)=> items.id ===id);
    // moviesss[index2]=null; 
    // moviesss=moviesss.filter((items:any) =>items);
    // moviesss=JSON.stringify(moviesss);
    // localStorage.setItem('watchlater',moviesss);
    const favoritedata= await this.data.getdata_favorite();
    const deletemovie:any = favoritedata.find((items:any ) => items.id === id);
    this.http.delete('http://localhost:3000/watchlater/'+id).subscribe();
    location.reload();
    
   }

}
