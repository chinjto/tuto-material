import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OwnerListComponent} from './list/owner-list.component';
import {OwnerRoutingModule} from "./owner-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {OwnerAddDialogComponent} from "./add-dialog/owner-add-dialog.component";
import {OwnerEditComponent} from './edit/owner-edit.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    OwnerListComponent,
    OwnerAddDialogComponent,
    OwnerEditComponent,
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
  ]
})
export class OwnerModule { }
