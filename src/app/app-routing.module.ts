import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pokemon/:id', component: DetailPokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
