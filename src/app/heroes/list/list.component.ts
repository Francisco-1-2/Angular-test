import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public HeroNames: string[] = ['Spiderman','IronMan','Hulk','She Hulk','Thor'];
  public deletedHero?:string = "";

  borrarUltimoHeroe(): void{
    this.deletedHero = this.HeroNames.pop();

  }
}
