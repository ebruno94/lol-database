import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Champion } from './../models/champion';

@Component({
  selector: 'app-champion-add',
  templateUrl: './champion-add.component.html',
  styleUrls: ['./champion-add.component.css']
})
export class ChampionAddComponent{
  @Input() childNewChampClicked = false;
  @Output() childSendNewInfo = new EventEmitter();

  clickCreate(){
    this.childNewChampClicked = true;
  }

  submitForm(name, url, role, champClass, champMain){
    let newChamp: Champion = new Champion(name, url, role, champClass, champMain);
      this.childSendNewInfo.emit(newChamp);
  }
}
