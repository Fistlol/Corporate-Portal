import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogFolderComponent} from '../dialog-folder/dialog-folder.component';
import {ContentComponent} from '../content/content.component';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  nameDialog = '';
  linkDialog = false;

  constructor(private dialog: MatDialog,
              public content: ContentComponent) { }

  ngOnInit(): void {}

  createLink(): void {
    this.linkDialog = true;
    const dialogRef = this.dialog.open(DialogFolderComponent, {
      data: {name: this.nameDialog}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.nameDialog = result;
    });
  }
}
