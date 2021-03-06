import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent {

  private _travel: any;
  private _guests: any;

  // booleans for the spinners
  private _isLoadingTravel: boolean;
  private _isLoadingWedding: boolean;

  private _http: HttpClient;

  /**
   * Constructor of VoyageComponent
   * @param http HttpClient
   */
  constructor(private http: HttpClient) {
    this._travel = {} as any;
    this._guests = {} as any;
    this._isLoadingTravel = true;
    this._isLoadingWedding = true;
    this._http = http;
    this.loadDatas();
  }

  /**
   * Returns the value of the boolean isLoadingTravel
   */
  get isLoadingTravel() {
    return this._isLoadingTravel;
  }

  /**
   * Returns the value of the boolean isLoadingWedding
   */
  get isLoadingWedding() {
    return this._isLoadingWedding;
  }

  /**
   * Returns the value of travel
   */
  public get nbTravels() {
    let result = 0;
    for(let i = 0 ; i < this._travel.length ; i++) {
      result += this._travel[i].nb_participants;
    }
    return result;
  }

  /**
   * Returns the number of guests that will be present to the wedding
   */
  public get nbPresents() {
    let result = 0;
    for(let i = 0 ; i < this._guests.length ; i++) {
      result += this._guests[i].is_present;
    }
    return result;
  }

  /**
   * Gets the data from the API
   */
  private loadDatas() {
    this._http.get<any[]>('https://www.n-et-c.fr/api/v1/travel', ).subscribe(data => {
      this._travel = data;
      this._isLoadingTravel = false;
    });
    this._http.get<any[]>('https://www.n-et-c.fr/api/v1/presence', ).subscribe(data => {
      this._guests = data;
      this._isLoadingWedding = false;
    });
  }

}
