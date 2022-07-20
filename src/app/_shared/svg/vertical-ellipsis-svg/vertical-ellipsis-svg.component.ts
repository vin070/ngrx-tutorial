import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-ellipsis-svg',
  templateUrl: './vertical-ellipsis-svg.component.html',
})
export class VerticalEllipsisSvgComponent {
  @Input() width: string = '16px';
  @Input() height = '16px';
  @Input() fill = 'darkgray';

  constructor() {}
}
