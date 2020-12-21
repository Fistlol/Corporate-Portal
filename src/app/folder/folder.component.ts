import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {DialogFolderComponent} from '../dialog-folder/dialog-folder.component';
import {DataFolder} from '../dataFolder';
import {DataFile} from '../dataFile';
import {FolderService} from './folder.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FolderComponent implements OnInit {
  nameDialog = '';
  parentId = 2;
  value = '';
  folderDialog = false;
  dataFolderAPI: any[] = [];
  folderId: any;
  date: any;
  dataFileAPI: any[] = [];
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
      this.folderId = this.dataFolderAPI[this.idx].id;
      this.folderService.getFiles(this.folderId).subscribe((result: DataFile[]) => {
        this.cdRef.markForCheck();
        this.dataFileAPI = result;
        this.date = new Date(this.dataFileAPI[this.idx].createdOn);
        this.dataFileAPI[0].createdOn = this.date;
        console.log(this.dataFileAPI, 'FILESSS folder');
      });
      console.log(this.dataFolderAPI);
    });
  }

  getFolderIdx(i: number): void {
    this.idx = i;
    this.folderId = this.dataFolderAPI[this.idx].id;
    this.folderService.getFiles(this.folderId).subscribe((result: DataFile[]) => {
      this.cdRef.markForCheck();
      this.dataFileAPI = result;
      this.date = new Date(this.dataFileAPI[this.idx].createdOn);
      this.dataFileAPI[0].createdOn = this.date;
      console.log(this.dataFileAPI, 'FILESSS folder');
    });
  }

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
