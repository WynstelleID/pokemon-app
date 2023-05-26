import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, DetailPokemonComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
