import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() summonerData: any;
  summonerId: string = "";

  constructor() { }

  ngOnInit(): void {
  } 

  ngOnChanges() {
    console.log("BODY: Update detec");
    this.summonerId = this.summonerData?.id;
    console.log("BODY: Updated id to:" + this.summonerId);
  }  
}
