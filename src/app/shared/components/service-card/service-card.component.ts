import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-card',
  standalone: true,
  templateUrl: './service-card.component.html',
})
export class ServiceCardComponent {
  @Input() number = '';
  @Input() image = '';
  @Input() title = '';
  @Input() description = '';
  @Input() link = '';
  @Input() items: string[] = [];
}