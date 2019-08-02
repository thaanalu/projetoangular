import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'restaurants', component: RestaurantsComponent},
  { path: 'home/restaurants', component: RestaurantsComponent},
  { path: 'sobre', component: SobreComponent},
  { path: '/restaurants/detail', component: DetailComponent},
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
