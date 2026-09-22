import { Component, signal } from '@angular/core';
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";

@Component({
  standalone:true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [MainLayoutComponent],
})

export class AppComponent {}
