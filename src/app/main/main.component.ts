import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DateBoxComponent} from '../date-box/date-box.component';
import {HttpClient} from '@angular/common/http';
import {FolderService} from '../folder/folder.service';
import {DataFolder} from '../dataFolder';
import {MatDialog} from '@angular/material/dialog';
import {LinkService} from '../link/link.service';
import {MapService} from '../map/map.service';
import {DataLink} from '../dataLink';
import {DataFile} from '../dataFile';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  exampleHeader = DateBoxComponent;
  dataFolderAPI: any;
  dataFileAPI: any;
  dataCameraAPI: any;
  dataLinkAPI: any;
  dataMapAPI: any;
  response: any;
  parentId = 2;
  folderId: any;
  parentIdCamera = 3;

  constructor(private dialog: MatDialog,
              private http: HttpClient,
              private folders: FolderService,
              private map: MapService,
              private links: LinkService) {
  }

  ngOnInit(): void {
    this.getFolder();
    this.getFolderCamera();
    this.getLinks();
  }

  getFolder(): void {
    this.folders.getFolder(this.parentId).subscribe((response: DataFolder[]) => {
      this.dataFolderAPI = response;
      console.log(this.dataFolderAPI);
      this.folderId = this.dataFolderAPI[0].id;
      this.folders.getFiles(this.folderId).subscribe((result: DataFile[]) => {
        this.dataFileAPI = result;
        console.log(this.dataFileAPI, 'FILESSS');
      });
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
}
