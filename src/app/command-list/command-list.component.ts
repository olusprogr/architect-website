import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-command-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './command-list.component.html',
  styleUrls: [
    './command-list.component.css',
  ]
})
export class CommandListComponent {
  commands = [
    {
      name: '/greet',
      description: 'Greet a user of your choice',
      example: 'ng new my-new-project'
    },
    {
      name: '/help',
      description: 'Shows you a list with all the command',
      example: 'ng serve'
    },
    {
      name: '/kick',
      description: 'Kick a Member of your choice',
      example: 'ng generate component my-component'
    },
    {
      name: '/say',
      description: 'Say something as the bot',
      example: 'ng build'
    }
  ];
}
