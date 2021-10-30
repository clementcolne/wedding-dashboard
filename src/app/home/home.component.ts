import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private _sort: any;

  constructor() {
    this._sort = 'all';
  }

  public sortGuests($event: any) {
    this._sort = $event;
  }

  public get sort() {
    return this._sort;
  }

}
