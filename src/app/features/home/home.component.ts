import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { PageTitleComponent } from '../../shared/components/page-title/page-title.component';
import { StatsSectionComponent } from '../../shared/components/stats-section/stats-section.component';
import { AboutComponent } from '../about/about.component';
import { HeroComponent } from './hero/hero.component';
import { NgForOf } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StatsSectionComponent, AboutComponent, HeroComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent { }