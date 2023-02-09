import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../Service/dataservice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
filterstring: any;

  constructor( 
    private data:DataserviceService,
    private http:HttpClient) 
    { }

    movies:any=[];
    genres:any=[];
    year:any=[];
    // filter*******
    selected_by_gener:any=[];
    selected_by_year:any=[];
    moviegenres:any=[];
    movieyears:any=[];
    movies_after_filter1:any=[];

    // pagination********
    page:number=1;
    count:number =0;
    tableSize:number =15;
   
 async ngOnInit(){

  this.movies= await this.data.getdata_bymoives();
  this.movies_after_filter1=this.movies
  console.log(this.movies);

  this.genres=await this.data.getdata_bygenres();
  // this.genres=this.genres;
  console.log(this.genres);

  this.year=await this.data.getdata_byyears();
  // this.year=this.year;
  console.log(this.year);
  }

  onTabledatachange(event:any){
    this.page =event;
    this.movies;
  }
  
  ontablesizechange(event:any):void{
    this.tableSize =event.target.value;
    this.page =1;
    this.movies;
  }

  filterimi_genres(items:any){
    this.movies_after_filter1.forEach((movie: any) =>{
       this.selected_by_gener=this.movies_after_filter1.filter((movie: any) => movie.genres.includes(items),
        this.moviegenres.push(this.selected_by_gener))
        this.movies=this.selected_by_gener
   
      });
  }

  filterimi_year(itemss:any){
      this.movies_after_filter1.forEach((movie: any) =>{
          this.selected_by_year=this.movies_after_filter1.filter((movie: any) =>  movie.year <= itemss && movie.year >= itemss - 10,
           this.movieyears.push(this.selected_by_year))
           this.movies=this.selected_by_year
         });
         //  this.allpost=this.movie_by_gener 
  }

  movie_watchlater:any=[]

// ketu jan ruajtur filmat ne  localstorage*************************************

//   addtowatchlater(id: number){
//     const selectedmovie = this.movies.find((items:any ) => items.id === id);
//    if(localStorage.getItem('watchlater') === null){
//      let list:any=[];
//      list.push(selectedmovie);
//      localStorage.setItem('watchlater',JSON.stringify(list));
//    }else{
//      let list:any=localStorage.getItem('watchlater');
//      this.movie_watchlater=JSON.parse(list);
//      this.movie_watchlater.push(selectedmovie);
//       var uniq = [...new Set(this.movie_watchlater.map(({id}:any) => id))].map(e => this.movie_watchlater.find(({id}:any) => id == e));	
//      localStorage.setItem('watchlater',JSON.stringify(uniq));
//    }
//  }

//  addtofavorite(id: number){
//   const selectedmovie = this.movies.find((items:any ) => items.id === id);
//  if(localStorage.getItem('favoritemovie') === null){
//    let list:any=[];
//    list.push(selectedmovie);
//    localStorage.setItem('favoritemovie',JSON.stringify(list));
//  }else{
//    let list:any=localStorage.getItem('favoritemovie');
//    this.movie_watchlater=JSON.parse(list);
//    this.movie_watchlater.push(selectedmovie);
//     var uniq = [...new Set(this.movie_watchlater.map(({id}:any) => id))].map(e => this.movie_watchlater.find(({id}:any) => id == e));	
//    localStorage.setItem('favoritemovie',JSON.stringify(uniq));
//  }
// }

// ketu jan ruajt ne  json ***************************

urlwatchlater='http://localhost:3000/watchlater';
urlfavorite='http://localhost:3000/favorite';
watchlaterdata:any=[];
favoritedata:any=[];

async addtofavorite(id: number){
    const selectedmovie = this.movies.find((items:any ) => items.id === id);
    console.log(selectedmovie);
    this.favoritedata = await this.data.getdata_favorite();
    console.log(this.favoritedata);
  if(this.favoritedata.find((item:any)=> item.id === selectedmovie.id)){
    console.log("ky filem eshte shtuar njehere ne liste");
  }else{
    await this.http.post(this.urlfavorite,selectedmovie).subscribe(selectedmovie);
    console.log(selectedmovie);
  }
}

async deletefavorite(id:number){
  this.favoritedata= await this.data.getdata_favorite();
  const deletemovie:any = this.favoritedata.find((items:any ) => items.id === id);
  this.http.delete('http://localhost:3000/favorite/'+id).subscribe();
}

 async addtowatchlater(id: number){
  const selectedmovie = this.movies.find((items:any ) => items.id === id);
  this.watchlaterdata = await this.data.getdata_watchlater();
 if(this.watchlaterdata.find((item:any)=> item.id === selectedmovie.id)){
   console.log("ky filem eshte shtuar njehere ne liste");
 }else{
  this.http.post(this.urlwatchlater, selectedmovie).subscribe(selectedmovie);
  console.log(selectedmovie);
 }
}


}
  
