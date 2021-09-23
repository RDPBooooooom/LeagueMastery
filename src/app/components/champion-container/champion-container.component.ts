import { ChampionMastery } from './../../Entity/ChampionMastery';
import { Component, OnInit, Input } from '@angular/core';
import { RESTRiotServiceService } from './../../service/restriot-service.service';

@Component({
  selector: 'app-champion-container',
  templateUrl: './champion-container.component.html',
  styleUrls: ['./champion-container.component.css']
})
export class ChampionContainerComponent implements OnInit {

  championMasterys!: ChampionMastery[]|any;

  constructor(public restApi: RESTRiotServiceService) { }

  ngOnInit(): void {
    this.restApi.getAllMasteryBySummoner("EXHSBmagJiQTtYbshDxUGiHFIPWYydLAuIxbsGBmCqALYF8").subscribe(data => {
      this.championMasterys = data;
    });
  }

}
