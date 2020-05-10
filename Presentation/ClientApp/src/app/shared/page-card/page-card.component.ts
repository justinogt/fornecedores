import { Component, ContentChild, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['./page-card.component.css']
})
export class PageCardComponent {
  @Input() titleTemplate: TemplateRef<any>;
  @Input() contentTemplate: TemplateRef<any>;

  constructor() { }
}
