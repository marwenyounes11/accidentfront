import { Component } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-403',
  templateUrl: '403.component.html',
  styleUrls: ['./403.component.css']
 
})
export class P403Component {

  constructor(private _location: Location) { }
  backClicked() {
    this._location.back();
  }
}
