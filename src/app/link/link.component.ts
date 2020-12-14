import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LinkService} from './link.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogFolderComponent} from '../dialog-folder/dialog-folder.component';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  nameDialog = '';
  response: any;
  dataAPI = [];

  constructor(private http: HttpClient,
              private dialog: MatDialog,
              private links: LinkService) {
  }

  ngOnInit(): void {
    this.getLinks();
  }

  getLinks(): void {
    this.links.getLinks().subscribe((response) => {
      this.dataAPI = response;
      this.response = response;
      console.log(this.response);
    });
  }

  createLink(): void {
    const dialogRef = this.dialog.open(DialogFolderComponent, {
      data: {name: this.nameDialog}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.nameDialog = result;
    });
  }
}
