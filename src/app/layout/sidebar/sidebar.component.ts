import { Component, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'src/app/models/MenuItem.model'; 
import { SidebarService } from 'src/app/services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  
  sidebarWidth: number = 225; // Ancho del sidebar cuando está expandido
 
  @Output() sidebarToggle: EventEmitter<void> = new EventEmitter<void>();

  menuItems: MenuItem[];

  constructor(private sidebarService: SidebarService) {
    this.menuItems = this.sidebarService.menuItems;
    console.log(this.menuItems)
  }

  get isCollapsed(): boolean {
    return this.sidebarService.isCollapsed;
  }

  toggleSidebar(): void {
    this.sidebarService.toggleSidebar();
    this.sidebarToggle.emit();
  }

 
  
  toggleSubMenu(menuItem: MenuItem): void {
    menuItem.showSubMenu = !menuItem.showSubMenu;
  }

  highlightMenuItem(menuItem: MenuItem): void {
    menuItem.highlighted = true;
  }

  unhighlightMenuItem(menuItem: MenuItem): void {
    menuItem.highlighted = false;
  }

  highlightSubItems(menuItem: MenuItem): void {
    if (menuItem.subItems) {
      menuItem.subItems.forEach((subMenuItem) => {
        subMenuItem.highlighted = true;
      });
    }
  }

  unhighlightSubItems(menuItem: MenuItem): void {
    if (menuItem.subItems) {
      menuItem.subItems.forEach((subMenuItem) => {
        subMenuItem.highlighted = false;
      });
    }
  }

  menuItemClicked(menuItem: MenuItem): void {
    // Realizar acciones al hacer clic en el elemento del menú
    console.log('MenuItem clicked:', menuItem);
  }

  subMenuItemClicked(subMenuItem: MenuItem): void {
    // Realizar acciones al hacer clic en el submenú
    console.log('SubMenuItem clicked:', subMenuItem);
  }
 
}
