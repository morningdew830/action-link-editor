import { Component, OnInit, Output, EventEmitter, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { IDatatableSelectionEvent, IDatatableSortEvent, IDatatablePaginationEvent } from 'ng2-md-datatable';

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
    private router: Router,
    private _ngZone: NgZone
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
}
