import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent {

  private _travel: any;
  private _isLoading: boolean;

  private _http: HttpClient;

  /**
   * Constructor of VoyageComponent
   * @param http HttpClient
   */
  constructor(private http: HttpClient) {
    this._travel = {} as any;
    this._isLoading = true;
    this._http = http;
    this.loadDatas();
  }

  /**
   * Returns the value of the boolean isLoading
   */
  get isLoading() {
    return this._isLoading;
  }

  /**
   * Returns the value of travel
   */
  public get nbTravels() {
    var result = 0;
    for(let i = 0 ; i < this._travel.length ; i++) {
      result += this._travel[i].nb_participants;
    }
    return result;
  }

  /**
   * Gets the data from the API
   */
  private loadDatas() {
    this._http.get<any[]>('https://www.n-et-c.fr/api/v1/travel', ).subscribe(data => {
      this._travel = data;
      this._isLoading = false;
    });
  }

}
