import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataserviceService } from '../Service/dataservice.service';

@Component({
  selector: 'app-favoritemovie',
  templateUrl: './favoritemovie.component.html',
  styleUrls: ['./favoritemovie.component.css']
})
export class FavoritemovieComponent implements OnInit {
  newarray1:any;
  myfavorite:any;
  constructor(
    private http:HttpClient,
    private data:DataserviceService
  ) { }

  async ngOnInit() {
    this.myfavorite=await this.data.getdata_favorite();
  }
  
  playfunction(){
    alert ("filmi juaj do te hapet se shpejti ju lutem prisni ")
   }

  async deletewatchlatermovie(id:number){
    // delete  nga localstorage ********************************
    // let moviesss:any= localStorage.getItem('favoritemovie');
    // moviesss=JSON.parse(moviesss);
    // let index2=moviesss.findIndex((items:any)=> items.id ===id);
    // moviesss[index2]=null; 
    // moviesss=moviesss.filter((items:any) =>items);
    // moviesss=JSON.stringify(moviesss);
    // localStorage.setItem('favoritemovie',moviesss);
    const favoritedata= await this.data.getdata_favorite();
    const deletemovie:any = favoritedata.find((items:any ) => items.id === id);
    this.http.delete('http://localhost:3000/favorite/'+id).subscribe();
    location.reload();
   }

}
