import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-scroller-fixed-buffer',
  templateUrl: './scroller-fixed-buffer.component.html',
  styleUrls: ['./scroller-fixed-buffer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollerFixedBufferComponent implements OnInit {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  constructor() { }

  ngOnInit() {
  }

}
