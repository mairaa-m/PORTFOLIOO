import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
  projects = [
    { title: 'National Parks', tech: 'HTML CSS Js', desc: 'National Park', img: 'Nationalpark.png', live: '~~>',link:'https://mairaa-m.github.io/National-Parks/' },
    { title: 'Hair Oil E-commerce', tech: 'React Discord.js', desc: 'Hair-oil E-commerce', img: 'hairproducts.png', live: '~~>',link:'https://mairaa-m.github.io/e-commerce-hairproducts/' },
    // { title: 'Kahoot Answers', tech: 'Node.js Express', desc: 'Quiz answers tool', img: 'assets/kahoot.png', live: '~~>' },
    // { title: 'Kotibot', tech: 'HTML CSS JS PHP', desc: 'Multi-functional bot', img: 'assets/kotibot.png', live: '~~>' },
    // { title: 'Portfolio', tech: 'Angular TS', desc: 'Personal site', img: 'assets/portfolio.png', live: '~~>' },
    // { title: 'Discord Web', tech: 'React Tailwind', desc: 'Landing page clone', img: 'assets/discord.png', live: '~~>' }
  ];
}
