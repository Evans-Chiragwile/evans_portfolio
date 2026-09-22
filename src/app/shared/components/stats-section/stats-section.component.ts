import { Component } from '@angular/core';
import { StatsCardComponent } from "./stats-card/stats-card.component";

@Component({
  selector: 'app-stats-section',
  standalone: true,
  templateUrl: './stats-section.component.html',
  imports: [StatsCardComponent],
})
export class StatsSectionComponent {}