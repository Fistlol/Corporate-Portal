import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {DialogFolderComponent} from '../dialog-folder/dialog-folder.component';
import {LinkService} from './link.service';
import {DataLink} from '../dataLink';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkComponent implements OnInit {
  nameDialog = '';
  linkDialog = false;
  dataLinkAPI: any[] = [];
  imageId: any;

  constructor(private dialog: MatDialog,
              public linkService: LinkService,
              private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getLinks();
  }

  getLinks(): void {
    this.linkService.getLinks().subscribe((response: DataLink[]) => {
      this.cdRef.markForCheck();
      this.dataLinkAPI = response;
      console.log(this.dataLinkAPI);
    });
  }

  getLinkImage(): void {

  }

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
