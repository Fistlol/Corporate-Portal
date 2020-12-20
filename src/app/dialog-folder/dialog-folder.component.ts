import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DataDialog} from '../dataDialog';

@Component({
  selector: 'app-dialog-folder',
  templateUrl: './dialog-folder.component.html',
  styleUrls: ['./dialog-folder.component.scss']
})
export class DialogFolderComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogFolderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataDialog) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
