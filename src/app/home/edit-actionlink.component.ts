import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import ActionLink, { 
  Presentations, Presentation, Events, WindowMethods, DispatchMethods, Actions
} from '../models/actionlink.model';

@Component({
  selector: 'app-edit-actionlink',
  templateUrl: './edit-actionlink.component.html',
  styleUrls: ['./edit-actionlink.component.scss']
})
export class EditActionLinkComponent implements OnInit {
  _presentations: Presentation[] = Presentations;
  _events: string[] = Events;
  _actions: string[] = Actions;
  _windowMethods: string[] = WindowMethods;
  _dispatchMethods: string[] = DispatchMethods;
  _actionLink: ActionLink;

  constructor( public _dialogRef: MdDialogRef<any> ) {
    this._actionLink = new ActionLink();
  }

  ngOnInit() { }

  /**
   * save 
   */
  public save = () => {
    console.log('submit');
  }

}
