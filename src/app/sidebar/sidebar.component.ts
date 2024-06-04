import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() isExpanded : boolean = false;
  @Output() togglesidebar:EventEmitter<boolean> = new EventEmitter<boolean>()
  
  handlesidebartoggle = () => this.togglesidebar.emit(!this.isExpanded)


  showIcons = true;
}
