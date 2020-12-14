import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DateBoxComponent} from '../date-box/date-box.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  exampleHeader = DateBoxComponent;
  constructor() {
  }

  ngOnInit(): void {
  }

}
