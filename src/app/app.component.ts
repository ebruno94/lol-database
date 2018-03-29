import { Component } from '@angular/core';
import { Champion } from './models/champion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterChampList: Champion[] = [
    new Champion("Shen", "https://ddragon.leagueoflegends.com/cdn/8.6.1/img/champion/Shen.png", "Tank", "Warden", true),
    new Champion("Ornn", "https://ddragon.leagueoflegends.com/cdn/8.6.1/img/champion/Ornn.png", "Tank", "Vanguard", true),
    new Champion("Talon", "https://ddragon.leagueoflegends.com/cdn/8.6.1/img/champion/Talon.png", "Slayer", "Assassin", false),
    new Champion("Ryze", "https://ddragon.leagueoflegends.com/cdn/8.6.1/img/champion/Ryze.png", "Mage", "Battle Mage", true),
    new Champion("Lux", "https://ddragon.leagueoflegends.com/cdn/8.6.1/img/champion/Lux.png", "Mage", "Burst Mage", false),
    new Champion("Ziggs", "https://ddragon.leagueoflegends.com/cdn/8.6.1/img/champion/Ziggs.png", "Mage", "Artillery Mage", false),
    new Champion("Yasuo", "https://ddragon.leagueoflegends.com/cdn/8.6.1/img/champion/Yasuo.png", "Slayer", "Skirmisher", true),
    new Champion("Xin Zhao", "https://ddragon.leagueoflegends.com/cdn/8.6.1/img/champion/XinZhao.png", "Slayer", "Skirmisher", true),
    new Champion("Talon", "https://ddragon.leagueoflegends.com/cdn/8.6.1/img/champion/Talon.png", "Slayer", "Assassin", false),
    new Champion("Janna", "https://ddragon.leagueoflegends.com/cdn/8.6.1/img/champion/Janna.png", "Controller", "Enchanter", false),
    new Champion("Zyra", "https://ddragon.leagueoflegends.com/cdn/8.6.1/img/champion/Zyra.png", "Controller", "Disruptor", false),
    new Champion("Lucian", "https://ddragon.leagueoflegends.com/cdn/8.6.1/img/champion/Lucian.png", "Marksman", "Marksman", true),
    new Champion("Draven", "https://ddragon.leagueoflegends.com/cdn/8.6.1/img/champion/Draven.png", "Marksman", "Marksman", false),
    new Champion("Kalista", "https://ddragon.leagueoflegends.com/cdn/8.6.1/img/champion/Kalista.png", "Marksman", "Marksman", true),
    new Champion("Nexticus", "https://scontent-lax3-2.cdninstagram.com/vp/e134709234e73d3e14062b196271ffb4/5B6ABAF3/t51.2885-15/e35/20590135_111818022813435_1502550439709638656_n.jpg", "Tank / Mage", "Bruiser / Battle Mage", true)
  ]

  selectedChampion: Champion = null;
  newChampClicked = false;

  editClicked(champSelected){
    this.selectedChampion = champSelected;
    console.log("edit clicked");
    console.log("Editting: " + this.selectedChampion.name);
  }

  finishEdit(){
    this.selectedChampion = null;
  }

  createNewChamp(){
    this.newChampClicked = true;
  }

  createNewChampion(champ: Champion){
    this.masterChampList.push(champ);
    this.newChampClicked = false;
  }

}
