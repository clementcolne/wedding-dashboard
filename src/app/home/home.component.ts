import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private _sort: any;

  /**
   * Constructor of HomeComponent
   */
  constructor() {
    this._sort = 'all';
  }

  /**
   * gets the from the child event
   * @param $event value of the event
   */
  public sortGuests($event: any) {
    this._sort = $event;
  }

  /**
   * Returns the value of this._sort
   */
  public get sort() {
    return this._sort;
  }

}
