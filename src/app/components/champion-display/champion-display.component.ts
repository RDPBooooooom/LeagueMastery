import { RESTRiotServiceService } from './../../service/restriot-service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-champion-display',
  templateUrl: './champion-display.component.html',
  styleUrls: ['./champion-display.component.css']
})
export class ChampionDisplayComponent implements OnInit {

  @Input() championId!: number;
  championData: any;

  constructor(public restApi: RESTRiotServiceService) { }

  ngOnInit(): void {
    this.restApi.getChampionData(this.championId).subscribe(data => {
      this.championData = data;
    });
  } 
}
