import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DataDialog} from '../dataDialog';
import {LinkComponent} from '../link/link.component';
import {FolderComponent} from '../folder/folder.component';
import {CameraComponent} from '../camera/camera.component';

@Component({
  selector: 'app-dialog-folder',
  templateUrl: './dialog-folder.component.html',
  styleUrls: ['./dialog-folder.component.scss']
})
export class DialogFolderComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogFolderComponent>,
    public link: LinkComponent,
    public folder: FolderComponent,
    public camera: CameraComponent,
    @Inject(MAT_DIALOG_DATA) public data: DataDialog) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
