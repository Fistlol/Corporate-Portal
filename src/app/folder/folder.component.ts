import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTable} from '@angular/material/table';

import {DialogFolderComponent} from '../dialog-folder/dialog-folder.component';
import {MainComponent} from '../main/main.component';
import {DataFile} from '../dataFile';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit{
  displayedColumns: string[] = ['name', 'createdBy', 'createdOn', 'fileType'];
  nameDialog = '';
  parentId = 2;
  value = '';
  folderDialog = false;


  constructor(private dialog: MatDialog,
              public main: MainComponent) { }

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
