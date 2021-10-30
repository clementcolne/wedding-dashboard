import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-sortform',
  templateUrl: './sortform.component.html',
  styleUrls: ['./sortform.component.css']
})
export class SortformComponent {

  @Output('sortRequest')
  private _sortRequest = new EventEmitter<any>();

  constructor() { }

  public changed(value: string) {
    this._sortRequest.emit(value);
  }

}
