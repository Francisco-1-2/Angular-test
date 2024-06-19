import { Injectable } from '@angular/core';
import { character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: character[]=[{
    id:uuid(),
    name: 'kuririn',
    power:1000
  },{
    id:uuid(),
    name: 'Goku',
    power:9500
  },{
    id:uuid(),
    name: 'Vegeta',
    power:7500
  },
];

onNewCharacter(character:character):void{
  const setCharacter: character ={ ...character, id:uuid()}
  this.characters.push(setCharacter);
}

onDeleteCharacter(id:string):void{
    this.characters = this.characters.filter(character=> character.id !== id);
  //this.characters.splice(id,1);
  }

//onDeleteCharacter(index:number):void{
//  this.characters.splice(index,1);
//}

}
