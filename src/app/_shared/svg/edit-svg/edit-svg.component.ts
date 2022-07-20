import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-svg',
  templateUrl: './edit-svg.component.html'
})
export class EditSvgComponent {
  @Input() width: string = '16';
  @Input() height: string = '16';
  @Input() fill: string = 'darkgray';

  constructor() {}

}
