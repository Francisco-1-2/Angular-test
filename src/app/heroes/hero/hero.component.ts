import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = "Spiderman";
  public age: number = 20;
  public capitalize: string ="";

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{

    return`${this.name} - ${this.age} `
  }

  changeHero():void{
    this.name = "IronMan";
  }

  ChangeAge():void{
    this.age = 25;
  }

  resetForm():void{
    this.name = "Spiderman";
    this.age = 20;
  }

}
