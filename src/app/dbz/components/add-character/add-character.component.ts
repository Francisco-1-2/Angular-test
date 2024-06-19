import { Component, EventEmitter, Output, output } from '@angular/core';
import { character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-addcharacter',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<character> = new EventEmitter();


  public character: character ={
    id :uuid(),
    name: '',
    power: 0
  };

  emitCharacter():void{


    console.log(this.character);
    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character={id:'temp',name:'',power:0};
  }
}
