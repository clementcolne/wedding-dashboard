import {Component, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css']
})
export class GuestsComponent {

  private _guests: any;
  private _guestsCopy: any;
  private _isLoading: boolean;

  private _http: HttpClient;

  /**
   * Constructor of GuestsComponent
   * @param http HttpClient
   */
  constructor(private http: HttpClient) {
    this._guests = [] as any;
    this._guestsCopy = [] as any;
    this._isLoading = true;
    this._http = http;
    this.loadDatas();
  }

  /**
   * Gets the value of the radio button from the parent
   * @param sortValue
   */
  @Input()
  public set sortGuests(sortValue: any) {
    this._sort(sortValue);
  }

  /**
   * Sort the array of guests depending the parameter
   * @param sortValue type of sort (all, presents or absents)
   */
  private _sort(sortValue: string) {
    // resetting array;
    this._guests = [this._guestsCopy.length] as any;
    switch (sortValue) {
      case 'all':
        // request all guests
        this._guests = this._guestsCopy;
        break;
      case 'presents':
        for(let i = 0 ; i < this._guestsCopy.length ; i++) {
          if(this._guestsCopy[i].is_present) {
            this._guests.push(this._guestsCopy[i]);
          }
        }
        this._guests.shift();
        break;
      case 'absents':
        for(let i = 0 ; i < this._guestsCopy.length ; i++) {
          if(!this._guestsCopy[i].is_present) {
            this._guests.push(this._guestsCopy[i]);
          }
        }
        this._guests.shift();
        break;
      default:
        // default case means all guests
        this._guests = this._guestsCopy;
        break;
    }
  }

  /**
   * Returns the value of the boolean isLoading
   */
  get isLoading() {
    return this._isLoading;
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
    this._http.get<any[]>('https://www.n-et-c.fr/api/v1/presence', ).subscribe(data => {
      this._guests = data;
      // a copy of the array guests for sorting
      this._guestsCopy = data;
      this._isLoading = false;
    });
  }

}
