import { Component, OnInit, ChangeDetectionStrategy , ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-scroller-horizontal',
  templateUrl: './scroller-horizontal.component.html',
  styleUrls: ['./scroller-horizontal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollerHorizontalComponent implements OnInit {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  constructor() { }

  ngOnInit() {
  }

}
