import { Component, OnInit, Output, EventEmitter, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { IDatatableSelectionEvent, IDatatableSortEvent, IDatatablePaginationEvent } from 'ng2-md-datatable';
import { MdDialog } from '@angular/material';
import { AlertService, ActionLinkService } from '../services';
import ActionLink from '../models/actionlink.model';
import { EditActionLinkComponent } from './edit-actionlink.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() selectionChange: EventEmitter<IDatatableSelectionEvent>;
  @Output() sortChange: EventEmitter<IDatatableSortEvent>;
  @Output() paginationChange: EventEmitter<IDatatablePaginationEvent>;

  actionLinks: ActionLink[] = [];
  private _disabledDeleteButton: boolean = true;

  constructor(
    private _ngZone: NgZone,
    public _dialog: MdDialog,
    private _alertService: AlertService,
    private _actionLinkService: ActionLinkService,
  ) { }

  ngOnInit() {
    this._load();
  }

  private _load() {
    this._actionLinkService.getAll().subscribe(
      actionLinks => { 
        this.actionLinks = actionLinks;
        console.log(actionLinks);
      },
      error => {
        const message = error.json();
        this._alertService.error(message.error);
      }
    );
  }

  private _onSelectionChanged = (event: IDatatableSelectionEvent) => {
    this._ngZone.run(() => {
      if (!event.selectedValues || event.selectedValues.length === 0) {
        this._disabledDeleteButton = true;
      } else {
        this._disabledDeleteButton = false;
      }
    });
  }

  public _onAddClicked = () => {
    const dialogRef = this._dialog.open(EditActionLinkComponent, {
      // height: '80vh',
      width: '640px',
      // disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
