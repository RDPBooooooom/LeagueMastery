import { ChampionMastery } from './../../Entity/ChampionMastery';
import { Component, OnInit, Input } from '@angular/core';
import { RESTRiotServiceService } from './../../service/restriot-service.service';

@Component({
  selector: 'app-champion-container',
  templateUrl: './champion-container.component.html',
  styleUrls: ['./champion-container.component.css']
})
export class ChampionContainerComponent implements OnInit {

  @Input() summonerId: string = '';
  championMasterys!: ChampionMastery[]|any;

  constructor(public restApi: RESTRiotServiceService) { }

  ngOnInit(): void {
  }

  setChampMasteryFromAPI(){
    console.log("CHAMP_CONTAINER: Getting Champ Mastery with: " + this.summonerId);
    this.restApi.getAllMasteryBySummoner(this.summonerId).subscribe(data => {
      this.championMasterys = data;
    });
  }

  ngOnChanges() {
    this.setChampMasteryFromAPI();
  }

}
