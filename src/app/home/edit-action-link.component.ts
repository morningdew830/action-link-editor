import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { ActionLink, ViewAction } from '../services/action-link.model';

@Component({
  selector: 'app-edit-link',
  templateUrl: './edit-action-link.component.html',
  styleUrls: ['./edit-action-link.component.scss']
})
export class EditActionLinkComponent implements OnInit {
  public _surfaceTypes: string[];
  public _actionTypes: string[];
  public _objectTypes: string[];
  public _viewTypes: string[];
  public _originalActionLink: ActionLink;
  public _editingActionLink: ActionLink;

  constructor( public _dialogRef: MdDialogRef<any> ) {
    this._surfaceTypes = ['Link', 'Button', 'Icon'];
    this._actionTypes = ['View', 'Edit', 'URL', 'Alert', 'Task'];
    this._objectTypes = ['Page', 'Chart', 'Metric'];
    this._viewTypes = ['Same Window', 'New Window', 'Modal Pop-up'];
    this._editingActionLink = {
      surfaceType: '',
      displayText: '',
      actionType: '',
      actions: [{
        actionType: 'View',
        objectClass: 'caller',
        objectType: 'Page',
        whatToView: '',
        whereToView: 'Same Window'
      }, {
        actionType: 'Edit',
        objectClass: 'specify',
        objectType: 'Metric',
        whatToView: '',
        whereToView: 'New Window'
      }, {
        actionType: 'URL',
        objectClass: 'caller',
        objectType: 'Chart',
        whatToView: '',
        whereToView: 'Same Window'
      }]
    };
  }

  ngOnInit() { }

  /**
   * _onEditActionLinkSubmit
   */
  public _onEditActionLinkSubmit = () => {
    console.log('submit');
  }

}
