import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DataTypeModule {
    id:number;
    title:string ;
    year:string ;
    runtime:string ;
    genres:any;
    director:string;
    actors:string;
    plot:string;
    posterUrl:string;

}
