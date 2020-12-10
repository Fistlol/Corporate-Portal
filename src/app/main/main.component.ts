import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

}
