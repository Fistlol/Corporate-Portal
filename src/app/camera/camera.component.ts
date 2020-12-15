import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogFolderComponent} from '../dialog-folder/dialog-folder.component';
import {ContentComponent} from '../content/content.component';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
  nameDialog = '';
  parentId = 3;

  constructor(private dialog: MatDialog,
              public content: ContentComponent) { }

  ngOnInit(): void {}

  createFolder(): void {
    const dialogRef = this.dialog.open(DialogFolderComponent, {
      data: {name: this.nameDialog}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.nameDialog = result;
    });
  }

  createFile(): void {
    const dialogRef = this.dialog.open(DialogFolderComponent, {
      data: {name: this.nameDialog}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.nameDialog = result;
    });
  }

}
