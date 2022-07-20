import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plus-svg',
  templateUrl: './plus-svg.component.html'
})
export class PlusSvgComponent {

  @Input() width:string = '16';
  @Input() height:string = '16';
  @Input() fill:string = "darkgray";
  constructor() {}
}
