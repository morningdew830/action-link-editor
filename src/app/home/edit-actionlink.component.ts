import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import R from 'ramda';
import ActionLink, { 
  Presentations, Presentation, AllEvents, AllActions, WindowMethods, DispatchMethods
} from '../models/actionlink.model';

@Component({
  selector: 'app-edit-actionlink',
  templateUrl: './edit-actionlink.component.html',
  styleUrls: ['./edit-actionlink.component.scss']
})
export class EditActionLinkComponent implements OnInit {
  _presentations: Presentation[] = Presentations;
  _events: string[] = AllEvents;
  _actions: string[] = AllActions;
  _fields: string[] = [];
  _windowMethods: string[] = WindowMethods;
  _dispatchMethods: string[] = DispatchMethods;
  _actionLink: ActionLink;

  constructor( public _dialogRef: MdDialogRef<any> ) {
    
  }

  ngOnInit() { 
    this._actionLink = new ActionLink();
    this._actionLink.presentation = 'button';
    this.handleChangePresentation();
  }

  /**
   * Change Presentation 
   */
  handleChangePresentation() {
    let selectedPresentation: Presentation = R.find(R.propEq('name', this._actionLink.presentation))(this._presentations);

    if(this._actionLink.presentation == 'spacer' || this._actionLink.presentation == 'selector')
      this._events = [];
    else 
      this._events = AllEvents;

    if(selectedPresentation) {
      this._actions = selectedPresentation.actions;
      this._fields = selectedPresentation.fields;
    }
  }

  /**
   * Check field avaible
   */
  checkAvailableField(field) {
    return this._fields.indexOf(field) !== -1;
  }

  /**
   * save 
   */
  public save = () => {
    console.log('submit');
  }

}
