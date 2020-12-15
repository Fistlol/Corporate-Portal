import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogFolderComponent} from '../dialog-folder/dialog-folder.component';
import {ContentComponent} from '../content/content.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit{
  nameDialog = '';
  parentId = 2;
  value = '';
  folderDialog = false;

  constructor(private dialog: MatDialog,
              public content: ContentComponent) { }

  ngOnInit(): void {}

  createFolder(): void {
    this.folderDialog = true;
    const dialogRef = this.dialog.open(DialogFolderComponent, {
      data: {name: this.nameDialog},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.nameDialog = result;
      this.value = result;
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
