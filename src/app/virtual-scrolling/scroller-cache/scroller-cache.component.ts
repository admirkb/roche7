import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-scroller-cache',
  templateUrl: './scroller-cache.component.html',
  styleUrls: ['./scroller-cache.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollerCacheComponent implements OnInit {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  constructor() { }

  ngOnInit() {
  }

}
