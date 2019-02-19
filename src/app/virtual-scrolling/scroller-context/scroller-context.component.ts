import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-scroller-context',
  templateUrl: './scroller-context.component.html',
  styleUrls: ['./scroller-context.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollerContextComponent implements OnInit {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  constructor() { }

  ngOnInit() {
  }

}
