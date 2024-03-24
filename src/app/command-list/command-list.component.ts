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
      description: 'Greet a user of your choice'
    },
    {
      name: '/help',
      description: 'Shows you a list with all the commands'
    },
    {
      name: '/kick',
      description: 'Kick a member of your choice'
    },
    {
      name: '/say',
      description: 'Say something as the bot'
    },
    {
      name: '/userinfo',
      description: 'Displays every information about the selected user'
    },
    {
      name: '/clear',
      description: 'Clear messages in the channel'
    },
    {
      name: '/embed',
      description: 'Create an embed for you'
    },
    {
      name: '/csgo_maps',
      description: 'Displays your selected CS:GO map'
    },
    {
      name: '/memberlist',
      description: 'Shows you a list of the members on the server'
    },
    {
      name: '/ban',
      description: 'Ban a user of your choice'
    },
    {
      name: '/radio play',
      description: 'Join a voice channel, select a radio station, and enjoy one of 5 integrated radio stations'
    },
    {
      name: '/stop',
      description: 'Stop the current music'
    },
    {
      name: '/leave',
      description: 'Leave the voice channel'
    },
    {
      name: '/serverinfo',
      description: 'Get all the useful information about the server you are on'
    },
    {
      name: '/timeout',
      description: 'Send a user to a timeout'
    },
    {
      name: '/unmute',
      description: 'Unmute a member after a timeout'
    },
    {
      name: '/nick set',
      description: 'Change the nickname of a user'
    },
    {
      name: '/nick default',
      description: 'Reset the current nickname to the default'
    },
    {
      name: '/create password',
      description: 'Creates you a very strong password with a huge impact of characters'
    },
    {
      name: '/give messages',
      description: 'Read the channel history and show you the value of the sent messages'
    },
    {
      name: '/rank',
      description: 'Get your registered rank'
    },
    {
      name: '/ping',
      description: 'Get the bot\'s ping/latency'
    },
    {
      name: '/bot',
      description: 'Shows you useful information about the bot'
    },
    {
      name: '/roles',
      description: 'Shows you all the roles on the server'
    },
    {
      name: '/automod filter_invites',
      description: 'Filter every single invite link sent to your selected channel'
    },
    {
      name: '/automod filter_insult',
      description: 'Filter every single insult sent to your selected channel'
    }
  ];
}