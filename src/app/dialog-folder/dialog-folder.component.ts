import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DataFolder} from '../dataFolder';

@Component({
  selector: 'app-dialog-folder',
  templateUrl: './dialog-folder.component.html',
  styleUrls: ['./dialog-folder.component.scss']
})
export class DialogFolderComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogFolderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataFolder) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
