import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <hr>
  <button (click)="increaseBy(+1)"> Counter Button +1</button>
  <button (click)="decreaseBy(+1)"> Counter Button -1</button>
  <button (click)="reset(Clickcounter)"> Reset</button>
  <h4> Counter: {{ Clickcounter }}</h4>
  `
})

  export class counterComponent {

  public Clickcounter: number = 0;

  increaseBy(value: number):void{
    this.Clickcounter +=value;
  }

  decreaseBy(value: number):void{
    this.Clickcounter -=value;
  }

  reset(value: number):void{
    this.Clickcounter = 0;
  }


}
