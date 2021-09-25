import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  
  summonerData: any;

  update(summonerData: any){
    this.summonerData = summonerData;
    console.log("Update");
  }
}
