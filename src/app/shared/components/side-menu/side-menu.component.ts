import { Component } from '@angular/core';

interface IMenuItem {
  title: string;
  path: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [],
})
export class SideMenuComponent {
  public reactiveMenu: IMenuItem[] = [
    { title: 'Basicos', path: '/reactive/basic' },
    { title: 'Dinamicos', path: '/reactive/dynamic' },
    { title: 'Switches', path: '/reactive/switches' },
  ];

  public authMenu: IMenuItem[] = [{ title: 'SignUp', path: '/auth/signup' }];
}
