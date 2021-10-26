import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css']
})
export class GuestsComponent {

  private _guests: any;
  private _http: HttpClient;

  /**
   * Constructor of GuestsComponent
   * @param http HttpClient
   */
  constructor(private http: HttpClient) {
    this._guests = {} as any;
    this._http = http;
    this.loadDatas();
  }

  /**
   * Returns the value of guests
   */
  public get guests() {
    return this._guests;
  }

  /**
   * Gets the data from the API
   */
  private loadDatas() {
    this._http.get<any[]>('https://www.n-et-c.fr/api/v1/guests', ).subscribe(data => {
      this._guests = data;
    });
  }

}
