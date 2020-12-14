import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  response: any;
  constructor(private http: HttpClient,
              private map: MapService) { }

  ngOnInit(): void {
    this.map.getMap().subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });
  }

}
