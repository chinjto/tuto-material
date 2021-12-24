import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Owner} from "../owner";

@Component({
  selector: 'app-owner-edit',
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.scss']
})
export class OwnerEditComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Owner,
  ) { }

  ngOnInit(): void {
  }

}
