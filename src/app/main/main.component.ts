import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DateBoxComponent} from '../date-box/date-box.component';
import {MatDialog} from '@angular/material/dialog';
import {LinkService} from '../link/link.service';
import {MapService} from '../map/map.service';
import {DataLink} from '../dataLink';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  exampleHeader = DateBoxComponent;
  dataLinkAPI: any;
  dataMapAPI: any;
  response: any;
  parentId = 2;
  folderId: any;
  parentIdCamera = 3;
  date: any;

  constructor(private dialog: MatDialog,
              private map: MapService,
              private links: LinkService,
              private cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

}
