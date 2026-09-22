import { Component } from '@angular/core';
import { PageTitleComponent } from "../../shared/components/page-title/page-title.component";
import { StatsSectionComponent } from "../../shared/components/stats-section/stats-section.component";

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  imports: [PageTitleComponent, StatsSectionComponent]
})
export class AboutComponent {}