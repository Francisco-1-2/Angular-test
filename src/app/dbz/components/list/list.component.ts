import { Component, Input } from '@angular/core';
import { character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public linkCharacter: character[] = [{
    name:'Trunk',
    power:10,
  }]
}
