import { Component} from '@angular/core';
import { character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{

  public characters: character[]=[{
    name: 'kuririn',
    power:1000
  },{
    name: 'Goku',
    power:9500
  },{
    name: 'Vegeta',
    power:7500
  },
];

onNewCharacter(character:character):void{
  this.characters.push(character);
}

}
