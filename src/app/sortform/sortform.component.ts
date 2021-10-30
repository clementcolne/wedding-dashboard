import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-sortform',
  templateUrl: './sortform.component.html',
  styleUrls: ['./sortform.component.css']
})
export class SortformComponent {

  @Output('sortRequest')
  private _sortRequest = new EventEmitter<any>();

  /**
   * Constructor of SortformComponent
   */
  constructor() { }

  /**
   * trigerred when the selected radio button changes and emit an event to the parent
   * @param value value of the event (all, presents or absents)
   */
  public changed(value: string) {
    this._sortRequest.emit(value);
  }

}
