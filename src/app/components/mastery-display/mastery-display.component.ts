import { ChampionMastery } from './../../Entity/ChampionMastery';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mastery-display',
  templateUrl: './mastery-display.component.html',
  styleUrls: ['./mastery-display.component.css']
})
export class MasteryDisplayComponent implements OnInit {

  @Input() champMastery!: ChampionMastery;

  constructor() { }

  ngOnInit(): void {
  }

  getPercentCompleted(){
    return 100 / (this.getTotalPointsNeeded()) * this.champMastery.championPointsSinceLastLevel 
  }

  getTotalPointsNeeded(){
    return this.champMastery.championPointsSinceLastLevel + this.champMastery.championPointsUntilNextLevel
  }

}
