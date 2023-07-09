import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core'; 
import { SidebarService } from 'src/app/services/service.index';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent   {
  @Output() toggleSidebar: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }
  }