import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Champion } from './../models/champion';

@Component({
  selector: 'app-champion-edit',
  templateUrl: './champion-edit.component.html',
  styleUrls: ['./champion-edit.component.css']
})
export class ChampionEditComponent {
  @Input() childSelectChampion: Champion = null;
  @Output() clickSaveChanges = new EventEmitter();

  childSaveChanges(){
    this.clickSaveChanges.emit();
  }
}
