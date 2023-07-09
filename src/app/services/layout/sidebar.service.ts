import { Injectable } from '@angular/core';
import { MenuItem } from 'src/app/models/MenuItem.model';

@Injectable()
export class SidebarService {
  isCollapsed = false;

  menuItems: MenuItem[] = [
    { icon: 'home', name: 'Home', route: '/dashboard', subItems: [] },
    {
      icon: 'settings',
      name: 'asdasdasdas',
      route: 'dashboard',
      subItems: [
        {icon: '', name: 'Profile', route: '/dashboard' },
        {icon: '', name: 'Preferences', route: '/dashboard' },
        {icon: '', name: 'Preferences', route: '/dashboard' },
        {icon: '', name: 'Profile', route: '/dashboard' },
        {icon: '', name: 'Preferences', route: '/dashboard' },
        {icon: '', name: 'Preferences', route: '/dashboard' }
      ]
    },
    { icon: 'person', name: 'Profile', route: '/dashboard', subItems: [] },
    { icon: 'home', name: 'Home', route: '/dashboard', subItems: [] },
    {
      icon: 'settings',
      name: 'Settings',
      route: 'dashboard',
      subItems: [
        {icon: '', name: 'Profile', route: '/dashboard' },
        {icon: '', name: 'Preferences', route: '/dashboard' }
      ]
    },
    { icon: 'person', name: 'Profile', route: '/dashboard', subItems: [] },  { icon: 'home', name: 'Home', route: '/dashboard', subItems: [] },
    {
      icon: 'settings',
      name: 'Settings',
      route: 'dashboard',
      subItems: [
        {icon: '', name: 'Profile', route: '/dashboard' },
        {icon: '', name: 'Preferences', route: '/dashboard' }
      ]
    },
    { icon: 'person', name: 'Profile', route: '/dashboard', subItems: [] }
  ];

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor() { }

} 
