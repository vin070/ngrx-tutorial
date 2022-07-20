import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-delete-svg',
  templateUrl: './delete-svg.component.html',
})
export class DeleteSvgComponent {
  @Input() width: string = '16';
  @Input() height: string = '16';
  @Input() fill: string = 'darkgray';
  
  constructor() {}
}
