import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ActionLink, ViewAction } from '../services/action-link.model';

@Component({
  selector: 'app-edit-link',
  templateUrl: './edit-action-link.component.html',
  styleUrls: ['./edit-action-link.component.scss']
})
export class EditActionLinkComponent implements OnInit {
  public _surfaceTypes: string[];
  public _originalActionLink: ActionLink;
  public _editingActionLink: ActionLink = { surfaceType: '', displayText: '', actionType: '', actions: [] };

  constructor(
  ) {
    this._surfaceTypes = ['Link', 'Button', 'Icon'];
  }

  ngOnInit() { }

}
