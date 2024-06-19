import { Component, EventEmitter, Input, Output } from '@angular/core';
import { character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeleteChara: EventEmitter<string> = new EventEmitter()

  //public onDeleteChara: EventEmitter<number> = new EventEmitter()


  @Input()
  public linkCharacter: character[] = [{
    id:uuid(),
    name:'Trunk',
    power:10,
  }]

  onDeleteCharacter(id:string):void{
    this.onDeleteChara.emit(id);

    console.log(id)
  }
  //onDeleteCharacter(index:number):void{
  //  this.onDeleteChara.emit(index);

  //  console.log(index)
  //}

}
