import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChampionListComponent } from './champion-list/champion-list.component';
import { ChampionEditComponent } from './champion-edit/champion-edit.component';
import { ChampionAddComponent } from './champion-add/champion-add.component';
import { AddChampionComponent } from './add-champion/add-champion.component';

import { mainChampPipe } from './mainchamp.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ChampionListComponent,
    ChampionEditComponent,
    ChampionAddComponent,
    AddChampionComponent,
    mainChampPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//View List of Champions
//Add New Champion
//Sort Champion by role
//Sort Champion by name
//Sort Champions by tanks/support/damage
//View user's main champions (?)
//Sort Champion by how many times the user has played the champions
