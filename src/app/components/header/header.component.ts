import { BodyComponent } from './../body/body.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RESTRiotServiceService } from './../../service/restriot-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'LeagueMastery';
  summonerName: string = '';
  summonerData: any;

  @Output() newSummonerEvent = new EventEmitter<string>();

  constructor(public restApi: RESTRiotServiceService) { }

  ngOnInit(): void {
  }

  search() { 
    console.log("Search");
    if(this.summonerName != undefined){
      this.restApi.getSummonerByName(this.summonerName).subscribe(data => {
        this.summonerData = data;
        console.log(this.summonerData);
        console.log("emit");
        this.newSummonerEvent.emit(this.summonerData);
      });
    };
  }
}
