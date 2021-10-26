import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-voyage',
  templateUrl: './voyage.component.html',
  styleUrls: ['./voyage.component.css']
})
export class VoyageComponent {

  private _travel: any;
  private _http: HttpClient;

  /**
   * Constructor of VoyageComponent
   * @param http HttpClient
   */
  constructor(private http: HttpClient) {
    this._travel = {} as any;
    this._http = http;
    this.loadDatas();
  }

  /**
   * Returns the value of travel
   */
  public get travel() {
    return this._travel;
  }

  /**
   * Gets the data from the API
   */
  private loadDatas() {
    this._http.get<any[]>('https://www.n-et-c.fr/api/v1/travel', ).subscribe(data => {
      this._travel = data;
    });
  }

}
