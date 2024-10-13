import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {
  PersonalData: any[] = [
    {
      image:"../../assets/imgs/mohammed.png",
      websiteLink:"https://mohammed-atef-portfolio.vercel.app/home",
      title:"Mohammed's Portfolio",
    },
    {
      image:"../../assets/imgs/WhatsApp Image 2024-10-12 at 3.17.51 PM (1).jpeg",
      websiteLink:"https://portfolio-builder-ashrqat-ali.vercel.app/main",
      title:"Ashrqat's Portfolio",
    },
    {
      image:"../../assets/imgs/toqa.jpeg",
      websiteLink:"https://toqatamer-toqatamer490s-projects.vercel.app",
      title:"Toqa's Portfolio",
    },

    {
      image:"../../assets/imgs/laila-final.jpeg",
      websiteLink:"https://protfolio-omega-ten.vercel.app/",
      title:"Laila's Portfolio",
    }

  ];
}
