import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FormulariosModule } from '../pages/formularios/formularios.module';
import { PipesModule } from '../shared/pipes/pipes.module';
import { DirectivesModule } from '../shared/directives/directives.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    FormulariosModule,
    PipesModule,
    DirectivesModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
