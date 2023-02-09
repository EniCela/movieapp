import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataserviceService } from '../Service/dataservice.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private http:HttpClient,
    private data:DataserviceService
  ) { }

  ngOnInit(): void {
    let  iddd=this.route.snapshot.paramMap.get('id');
    console.warn(iddd);
    this.enn(iddd);

  }
  movie_:any=[];
  movie_detail:any=[];
async enn(id:any):Promise<void>{
  this.movie_=await this.http.get("http://localhost:3000/movies/" + id).toPromise()
  this.movie_detail=this.movie_
}


}
