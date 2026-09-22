import { Component } from '@angular/core';
import { PageTitleComponent } from "../../shared/components/page-title/page-title.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  imports: [PageTitleComponent]
})
export class ContactComponent {}