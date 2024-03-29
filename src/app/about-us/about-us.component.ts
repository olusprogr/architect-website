import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  we = [
    {
      name: 'Oli',
      role: 'ArchiTect Bot Owner',
      ranking: 'Programmer',
      progLanguages: ['PYTHON', 'C++', 'SQL', 'Typescript', 'Angular'],
      languages: ['Polish', 'German', 'English'],
      email: 'olus.main@gmail.com',
      link: 'https://media.discordapp.net/attachments/1192458056576028705/1221463342686928896/Picsart_23-10-08_18-43-14-250.webp?ex=6612ab62&is=66003662&hm=2f2ce89b8a58babc5239a785934e7c4f93036f48fad0408eafe7c46fc72ec678&=&format=webp'
    },
    {
      name: 'David',
      role: 'ArchiTect Bot Co-Owner',
      ranking: ['Web Developer', 'Programmer'],
      progLanguages: ['HTML', 'JAVA', 'JAVASCRIPT', 'CSS'],
      languages: ['Polish', 'German', 'English'],
      email: 'choduradavid16@gmail.com',
      link: 'https://media.discordapp.net/attachments/1192458056576028705/1221463343966060675/pfpppp.webp?ex=6612ab62&is=66003662&hm=2bb2a687c61c85e58402d9113ce82f06d658ba397a7a0344961980d43f9ef8ed&=&format=webp'
    },
    {
      name: 'Samuel',
      role: 'ArchiTect Bot Staff',
      ranking: 'Graphic Designer',
      languages: ['Polish', 'German', 'English'],
      email: 'samitymusic@gmail.com',
      link: 'https://media.discordapp.net/attachments/1192458056576028705/1221463343571927220/samuel_nigga_pfp_edited.webp?ex=6612ab62&is=66003662&hm=0f54473ddb67c4f72967d429a16aebdbef95d27ba3dea7fd5939094bda162027&=&format=webp'
    },
    {
      name: 'Levi',
      role: 'ArchiTect Bot Staff',
      ranking: 'Programmer',
      progLanguages: ['Swift', 'Python'],
      languages: ['German', 'English'],
      email: '',
      link: 'https://media.discordapp.net/attachments/1192458056576028705/1221463343198371850/image0.webp?ex=6612ab62&is=66003662&hm=d79c078656c28d50c00cdba360a534a2b1bda1535f1554694751d1b0df642a93&=&format=webp'
    }
  ];
}