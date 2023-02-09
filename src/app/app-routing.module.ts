import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritemovieComponent } from './favoritemovie/favoritemovie.component';
import { MovieComponent } from './movie/movie.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { WatchlaterComponent } from './watchlater/watchlater.component';

const routes: Routes = [
  { path: '', component: MovieComponent},
  {path:'favoritemovie', component:FavoritemovieComponent},
  {path:'watchlater', component:WatchlaterComponent},
  {path:'moviedetail/:id',component:MoviedetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
