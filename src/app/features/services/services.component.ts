import { Component } from '@angular/core';
import { PageTitleComponent } from '../../shared/components/page-title/page-title.component';
import { ServiceCardComponent } from "../../shared/components/service-card/service-card.component";

interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [PageTitleComponent, ServiceCardComponent],
  templateUrl: './services.component.html',
})

export class ServicesComponent {}