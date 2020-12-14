import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogFolderComponent} from '../dialog-folder/dialog-folder.component';
import {FolderService} from './folder.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit{
  nameDialog = '';
  parentId = 2;
  response: any;

  constructor(private dialog: MatDialog,
              private http: HttpClient,
              private folders: FolderService) { }

  ngOnInit(): void {
    this.folders.getFolder(this.parentId).subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });
    this.folders.getFiles().subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });
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
