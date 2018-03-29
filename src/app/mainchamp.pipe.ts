import { Pipe, PipeTransform } from '@angular/core';
import { Champion } from './models/champion';

@Pipe({
  name: "mainness",
  pure: false
})

export class mainChampPipe implements PipeTransform{
  transform(input: Champion[], chosenOption){
    var output: Champion[] = [];
    if (chosenOption === "mainChamps"){
      for (let i = 0; i < input.length; i++){
        if(input[i].main){
          output.push(input[i]);
        }
      }
      return output;
    } else if (chosenOption === "otherChamps"){
      for (let i = 0; i < input.length; i++){
        if(!input[i].main){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
