import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../interfaces/nav-item';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  navItems: NavItem[] = [
    {
      title: 'customers',
      icon: 'fas fa-users',
      link: '/customers',
    },
    {
      title: 'contacts',
      icon: 'fas fa-address-book',
      link: '/contacts',
    },
    {
      title: 'leads',
      icon: 'fas fa-hand-point-up',
      link: '#',
    },
    {
      title: 'reports',
      icon: 'fas fa-flag',
      link: '#',
    },
    {
      title: 'integrations',
      icon: 'fab fa-stack-exchange',
      link: '#',
    },
    {
      title: 'year-end sale',
      icon: 'fas fa-glass-cheers',
      link: '#',
    },
    {
      title: 'http tut',
      icon: 'fas fa-glass-cheers',
      link: 'tuts/http',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
