import { Component, OnInit } from '@angular/core';
import {OwnerService} from "../owner.service";
import {Owner} from "../owner";
import {MatDialog} from "@angular/material/dialog";
import {OwnerAddDialogComponent} from "../add-dialog/owner-add-dialog.component";

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit {

  displayedColumns: string[] = ['lastName', 'firstName'];
  dataSource: Owner[] = [];

  constructor(private _ownerService: OwnerService, private _dialog: MatDialog) { }

  ngOnInit(): void {
    this._ownerService.findAll().subscribe(result => {
      console.log(result);
      this.dataSource = result;
    });
  }

  public openAddDialog(): void {
    const dialogRef = this._dialog.open(OwnerAddDialogComponent, {
      width: '600px',
      data: {},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
