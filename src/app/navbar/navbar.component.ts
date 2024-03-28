import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(
    private router: Router
  ) { }

  navigateTo(direction: string = 'home') {
    switch (direction) {
      case 'home':
        this.router.navigate(['home']);
        break;
      case 'command-list':
        this.router.navigate(['command-list']);
        break;
      case 'about-us':
        this.router.navigate(['about-us']);
        break;
      default: this.router.navigate(['home']);
    }
  }
}
