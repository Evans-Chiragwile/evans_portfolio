import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ServiceDetailComponent } from "../../features/service-details/service-detail.component";

@Component({
    selector: 'app-main-layout',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent, ServiceDetailComponent],
    templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent { }