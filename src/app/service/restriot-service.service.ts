import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RESTRiotServiceService {

  constructor(private httpClient: HttpClient) { }

  getChampionData(championId: number){
    
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');

    return this.httpClient.get('http://localhost:4201/api/leagueJS/championById/'+championId, {headers: httpHeaders});
  }

  getAllMasteryBySummoner(summonerId: string){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');

    return this.httpClient.get('http://localhost:4201/api/leagueJS/championMasteryBySummonerId/'+summonerId, {headers: httpHeaders});  
  }

  getSummonerByName(summonerName: string){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');

    return this.httpClient.get('http://localhost:4201/api/leagueJS/summonerByName/'+summonerName, {headers: httpHeaders});  
  }
}
