import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: [
    'style/actions-containers.css',
    'style/container.css',
    'style/link-button.css',
    'style/text.css',
    'style/action.css',
    'style/title.css',
    'style/description.css',
    'style/under-actions.css',
    'style/at-logo.css',
  ]
})
export class HomeComponent {

}
