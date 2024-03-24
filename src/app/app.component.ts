import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'architect-website';
  counter = 0;
  @HostListener('window:keydown.enter', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.counter++;
    console.log('Enter key pressed', this.counter);
  }
}
