import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Champion } from '../models/champion';

@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.css']
})
export class ChampionListComponent{
  @Input() champList : Champion[] = [];
  @Output() clickEdit = new EventEmitter();

  filterByMainness: string = "allChampions";
  editChampion(champion: Champion){
    this.clickEdit.emit(champion);
  }

  onChange(optionFromMenu){
    this.filterByMainness = optionFromMenu;
  }

  toggleMain(clickedChampion: Champion, setMain: boolean){
    clickedChampion.main = setMain;
  }
}
