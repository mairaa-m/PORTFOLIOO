import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import emailjs from 'emailjs-com';
import { AfterViewInit } from '@angular/core';



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterModule, ],
  templateUrl: './main.html',
  styleUrls: ['./main.css'],
})
export class Main implements AfterViewInit{
isMenuOpen = false;
  constructor(private router: Router) {}

  projects = [
    { title: 'National Parks', tech: 'HTML CSS Js', desc: 'National Park', img: 'Nationalpark.png', live: '~~>',link:'https://mairaa-m.github.io/National-Parks/' },
    { title: 'Hair Oil E-commerce', tech: 'React Discord.js', desc: 'Hair-oil E-commerce', img: 'hairproducts.png', live: '~~>',link:'https://mairaa-m.github.io/e-commerce-hairproducts/' },
    { title: 'Kahoot Answers', tech: 'Node.js Express', desc: 'Quiz answers tool', img: 'assets/kahoot.png', live: '~~>' ,link:'https://mairaa-m.github.io/National-Parks/' },
    { title: 'Kotibot', tech: 'HTML CSS JS PHP', desc: 'Multi-functional bot', img: 'assets/kotibot.png', live: '~~>' ,link:'https://mairaa-m.github.io/National-Parks/' },
    { title: 'Portfolio', tech: 'Angular TS', desc: 'Personal site', img: 'assets/portfolio.png', live: '~~>',link:'https://mairaa-m.github.io/National-Parks/'  },
    { title: 'Discord Web', tech: 'React Tailwind', desc: 'Landing page clone', img: 'assets/discord.png', live: '~~>',link:'https://mairaa-m.github.io/National-Parks/'  }
  ];

  // Sirf 4 projects main page ke liye
  get mainProjects() {
    return this.projects.slice(0, 5);
  }

  goToProjectsPage() {
    this.router.navigate(['/projects']); // Naye page ka path
  }     
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
// Skills ka data structure
skillsData = [
  { 
    title: 'Languages', 
    items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'C#','.net'] 
  },
  { 
    title: 'Databases', 
    items: ['MySQL', 'SQL Server'] 
  },
  { 
    title: 'Frameworks', 
    items: ['Bootstrap 5','EmailJs'] 
  },
  { 
    title: 'Tools', 
    items: ['VS Code', 'GitHub', 'Figma', 'AI Tools',''] 
  },
  { 
    title: 'Other', 
    items: ['UI/UX Design', 'Responsive Web Design', 'SEO','API Integration'] 
  }
];

// app.component.ts mein ye add karein
onSubmitMessage(email: string, message: string) {
  if (email && message) {
    console.log("Message received from:", email);
    console.log("Content:", message);
    alert("System: Message sent successfully!");
  } else {
    alert("System Error: Please fill all fields.");
  }
}


  ngAfterViewInit(): void {
    // Initialize EmailJS with your Public Key
    emailjs.init('e6m3YAvXeTs2vCnX5'); // Public Key

    const button = document.querySelector('.btn-submit') as HTMLButtonElement;

    button?.addEventListener('click', () => {
      const emailInput = document.querySelector(
        'input[type="email"]'
      ) as HTMLInputElement;

      const messageInput = document.querySelector(
        'textarea'
      ) as HTMLTextAreaElement;

      if (!emailInput.value || !messageInput.value) {
        alert('Please fill all fields');
        return;
      }

      // Send Email via EmailJS
      emailjs.send(
        'service_m5gj7r9',       // Service ID
        'template_d2c9ovs',      // Template ID
        {
          from_email: emailInput.value,
          message: messageInput.value,
          to_email: 'mairameer653@gmail.com'
        }
      ).then(() => {
        alert('Message sent successfully!');
        emailInput.value = '';
        messageInput.value = '';
      }).catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Failed to send message: ' + (error.text || error.message || 'Unknown error'));
      });
    });
  }
}