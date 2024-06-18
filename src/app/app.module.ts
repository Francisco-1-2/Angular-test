import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterModule } from './counter/counter.module';
import { HeroesModuleModule } from './heroes/heroes-module/heroes-module.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    counterModule,
    HeroesModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
