import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollerComponent implements OnInit {
  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
  constructor() { }

  ngOnInit() {
  }

}
