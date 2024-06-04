import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { CommonModule } from '@angular/common';
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, SidebarComponent,CommonModule,NgbHighlight]
})
export class AppComponent {
  title = 'E-LearningSystem';
 
  
  sidebarExpanded: boolean = true;

}
