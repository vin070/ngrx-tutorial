import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-minus-svg',
  templateUrl: './minus-svg.component.html',
  styleUrls: ['./minus-svg.component.scss'],
})
export class MinusSvgComponent {
  @Input() width: string = '16';
  @Input() height: string = '16';
  @Input() fill: string = 'darkgray';

  constructor() {}
}
