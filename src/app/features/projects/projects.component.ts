import { Component } from '@angular/core';
import { PageTitleComponent } from "../../shared/components/page-title/page-title.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {

}