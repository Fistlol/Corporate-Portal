import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {DialogFolderComponent} from '../dialog-folder/dialog-folder.component';
import {FolderService} from '../folder/folder.service';
import {DataFolder} from '../dataFolder';
import {DataFile} from '../dataFile';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CameraComponent implements OnInit {
  nameDialog = '';
  parentId = 3;
  value = '';
  dataFolderAPI: any[] = [];
  folderId: any;
  dataFileAPI: any[] = [];
  date: any;
  idx = 0;

  constructor(private dialog: MatDialog,
              private folderService: FolderService,
              private cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getFolder();
  }

  getFolder(): void {
    this.folderService.getFolder(this.parentId).subscribe((response: DataFolder[]) => {
      this.cdRef.markForCheck();
      this.dataFolderAPI = response;
      this.folderId = this.dataFolderAPI[0].id;
      this.folderService.getFiles(this.folderId).subscribe((result: DataFile[]) => {
        this.cdRef.markForCheck();
        this.dataFileAPI = result;
        this.date = new Date(this.dataFileAPI[0].createdOn);
        this.dataFileAPI[0].createdOn = this.date;
        console.log(this.dataFileAPI, 'FILESSS camera');
      });
      console.log(this.dataFolderAPI);
    });
  }

  getFolderIdx(i: number): void {
    this.idx = i;
  }

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
