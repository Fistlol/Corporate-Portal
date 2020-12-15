import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FolderService} from '../folder/folder.service';
import {DataFolder} from '../dataFolder';
import {MatDialog} from '@angular/material/dialog';
import {LinkService} from '../link/link.service';
import {MapService} from '../map/map.service';
import {DataLink} from '../dataLink';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  dataFolderAPI: any;
  dataCameraAPI: any;
  dataLinkAPI: any;
  dataMapAPI: any;
  response: any;
  parentId = 2;
  parentIdCamera = 3;

  constructor(private dialog: MatDialog,
              private http: HttpClient,
              private folders: FolderService,
              private map: MapService,
              private links: LinkService) { }

  ngOnInit(): void {
    this.getFolder();
    this.getFolderCamera();
    this.getLinks();
  }



  getFolder(): void {
    this.folders.getFolder(this.parentId).subscribe((response: DataFolder[]) => {
      this.dataFolderAPI = response;
      console.log(this.dataFolderAPI);
    });
  }

  getFolderCamera(): void {
    this.folders.getFolder(this.parentIdCamera).subscribe((response: DataFolder[]) => {
      this.dataCameraAPI = response;
      console.log(this.dataCameraAPI);
    });
  }

  getLinks(): void {
    this.links.getLinks().subscribe((response: DataLink[]) => {
      this.dataLinkAPI = response;
      console.log(this.dataLinkAPI);
    });
  }

  getFile(): void {
    this.folders.getFiles().subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });
  }

}
