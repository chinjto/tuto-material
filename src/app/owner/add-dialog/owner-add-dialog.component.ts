import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Car} from "../../car/car";

@Component({
  selector: 'app-owner-add-dialog',
  templateUrl: './owner-add-dialog.component.html',
  styleUrls: ['./owner-add-dialog.component.scss']
})
export class OwnerAddDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<OwnerAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
