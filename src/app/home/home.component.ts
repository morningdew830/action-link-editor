import { Component, OnInit, Output, EventEmitter, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { IDatatableSelectionEvent, IDatatableSortEvent, IDatatablePaginationEvent } from 'ng2-md-datatable';
import { MdDialog } from '@angular/material';
import { EditActionLinkComponent } from './edit-action-link.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() selectionChange: EventEmitter<IDatatableSelectionEvent>;
  @Output() sortChange: EventEmitter<IDatatableSortEvent>;
  @Output() paginationChange: EventEmitter<IDatatablePaginationEvent>;

  private _disabledDeleteButton: boolean = true;

  constructor(
    private _ngZone: NgZone,
    public _dialog: MdDialog
  ) { }

  ngOnInit() { }

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
      height: '50vh',
      width: '80vw',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
